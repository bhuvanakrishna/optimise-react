import argparse
import json
import re
import subprocess
import tempfile
import os
from datetime import datetime
from pathlib import Path
import difflib
import logging

import joblib
import pandas as pd
import shap

from dotenv import load_dotenv
load_dotenv()
import traceback

from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    AutoModelForSeq2SeqLM,
    TextIteratorStreamer,
)
import threading
import torch



FEATURE_COLUMNS = [
    "depth",
    "hasLargeImage",
    "causesLayoutShift",
    "slowClickHandler",
    "deepComponentTree",
    "bulkDOMNodes",
    "slowNetwork",
    "expensiveEffects",
    "largeJsonState",
    "layout_row",
    "pattern_inline-functions",
    "pattern_lazy-loading",
    "pattern_missing-useMemo",
    "pattern_misused-useEffect",
    "pattern_prop-drilling",
    "pattern_repeated-fetching",
    "pattern_stale-closures",
    "pattern_too-many-effects",
    "pattern_unstable-props",
]

MODELS_DIR = Path(__file__).with_name("models")
DEFAULT_MODEL = MODELS_DIR / "gradient_boosting.joblib"
SCALER_PATH = MODELS_DIR / "scaler.joblib"
SCRIPT_DIR = Path(__file__).resolve().parents[1] / "synthetic-react-app" / "scripts"
PUPPETEER_SCRIPT = SCRIPT_DIR / "perf_puppeteer.js"


def compute_depth(base: Path) -> int:
    base = base.resolve()
    depth = 0
    for p in base.rglob("*"):
        if p.is_file():
            rel = p.relative_to(base)
            depth = max(depth, len(rel.parts))
    return depth


def extract_features(repo_path: Path) -> dict:
    features = {k: 0 for k in FEATURE_COLUMNS}
    features["depth"] = compute_depth(repo_path)
    features["deepComponentTree"] = int(features["depth"] > 5)

    for file in repo_path.rglob("*"):
        if not file.suffix.lower() in {".js", ".jsx", ".ts", ".tsx"}:
            if file.suffix.lower() in {".png", ".jpg", ".jpeg", ".gif"}:
                if file.stat().st_size > 200_000:
                    features["hasLargeImage"] = 1
            continue
        try:
            text = file.read_text(encoding="utf-8")
        except Exception:
            continue
        if "React.lazy" in text or "import(" in text:
            features["pattern_lazy-loading"] = 1
        inline_matches = re.findall(r"on\w+\s*={(?:\(.*?\)\s*=>|function)", text)
        if inline_matches:
            features["pattern_inline-functions"] = 1
        features["pattern_too-many-effects"] += len(re.findall(r"useEffect\s*\(", text))
        if "useMemo(" not in text:
            features["pattern_missing-useMemo"] = 1
        if re.search(r"useEffect\([^\)]*\)\s*(?!,\s*\[)", text):
            features["pattern_misused-useEffect"] = 1
        features["pattern_prop-drilling"] += text.count("props.")
        features["pattern_repeated-fetching"] += text.count("fetch(")
        if "setTimeout" in text or "for(" in text:
            features["slowClickHandler"] = 1
        if "for(" in text and "useEffect" in text:
            features["expensiveEffects"] = 1
        if "<div" in text and text.count("<div") > 50:
            features["bulkDOMNodes"] = 1
        if "flex-direction: row" in text or 'className="row"' in text:
            features["layout_row"] = 1

    features["pattern_prop-drilling"] = int(features["pattern_prop-drilling"] > 20)
    features["pattern_too-many-effects"] = int(features["pattern_too-many-effects"] > 5)
    features["pattern_repeated-fetching"] = int(
        features["pattern_repeated-fetching"] > 1
    )
    return features


def load_model(path: Path = DEFAULT_MODEL):
    if not path.exists():
        raise FileNotFoundError(f"Model not found at {path}")
    model = joblib.load(path)
    scaler = joblib.load(SCALER_PATH) if SCALER_PATH.exists() else None
    return model, scaler


def predict(features: dict):
    model, scaler = load_model()
    df = pd.DataFrame([features], columns=FEATURE_COLUMNS).fillna(0).astype(float)
    if scaler:
        df = pd.DataFrame(scaler.transform(df), columns=df.columns)
    pred = model.predict(df)[0]
    conf = (
        float(model.predict_proba(df)[0][1])
        if hasattr(model, "predict_proba")
        else float(pred)
    )
    explainer = shap.Explainer(model)
    shap_values = explainer(df)
    vals = shap_values.values[0]
    top_idx = list(reversed(vals.argsort()[-5:]))
    top_features = [(df.columns[i], float(vals[i])) for i in top_idx]
    return pred, conf, top_features


def extract_features_from_text(text: str) -> dict:
    """Compute feature dictionary for a block of code text."""
    with tempfile.TemporaryDirectory() as tmpdir:
        tmp_path = Path(tmpdir) / "snippet.jsx"
        tmp_path.write_text(text, encoding="utf-8")
        return extract_features(Path(tmpdir))


def save_comparison_html(
    orig_feat: dict, upd_feat: dict, orig_pred: float, upd_pred: float, out_file: Path
):
    rows = [
        f"<tr><td>{name}</td><td>{orig_feat.get(name, 0)}</td><td>{upd_feat.get(name, 0)}</td></tr>"
        for name in FEATURE_COLUMNS
    ]
    html = (
        "<html><body>\n"
        "<h1>Prediction</h1>\n"
        f"<p>Original: {orig_pred}</p>\n"
        f"<p>Updated: {upd_pred}</p>\n"
        "<h2>Feature Comparison</h2>\n"
        "<table border='1'>\n<tr><th>Feature</th><th>Original</th><th>Updated</th></tr>\n"
        + "\n".join(rows)
        + "\n</table></body></html>"
    )
    out_file.write_text(html, encoding="utf-8")


def save_diff_html(original: str, updated: str, out_file: Path):
    """Save side-by-side HTML diff using difflib."""
    diff = difflib.HtmlDiff().make_file(
        original.splitlines(),
        updated.splitlines(),
        fromdesc="Original",
        todesc="Updated",
    )
    out_file.write_text(diff, encoding="utf-8")


def iter_code_files(base: Path):
    exts = {".js", ".jsx", ".ts", ".tsx"}
    if base.is_file() and base.suffix.lower() in exts:
        yield base
        return
    for file in base.rglob("*"):
        if file.suffix.lower() in exts:
            yield file


def main():
    parser = argparse.ArgumentParser(
        description="Analyse React code for performance patterns"
    )
    parser.add_argument("path", help="Path to React project")
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose logging for LLM generation",
    )
    group = parser.add_mutually_exclusive_group()
    group.add_argument(
        "--llm",
        help="Path to local OR Hugging Face hosted model (e.g. google/flan-t5-xl)",
    )
    group.add_argument(
        "--openai-model", help="Name of OpenAI model (e.g. gpt-4 or gpt-3.5-turbo)"
    )
    args = parser.parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
    )
    logging.debug("Verbose logging enabled")

    repo_path = Path(args.path)
    if not repo_path.exists():
        print(f"Path not found: {repo_path}")
        return

    features = extract_features(repo_path)
    prediction, confidence, top_feats = predict(features)

    print("\n=== Prediction ===")
    print(f"Predicted label: {prediction}")
    print(f"Confidence: {confidence:.4f}")
    print("Top SHAP features:")
    for name, val in top_feats:
        print(f"  {name}: {val:+.4f}")

    if args.llm or args.openai_model:
        try:
            os.environ.setdefault("TOKENIZERS_PARALLELISM", "false")
            use_openai = bool(args.openai_model)
            logging.info(
                "Using %s for generation", "OpenAI" if use_openai else "Hugging Face"
            )
            if args.llm:
                from huggingface_hub import InferenceClient

                hf_token = (
                    os.getenv("HF_TOKEN")
                    or os.getenv("HUGGING_FACE_HUB_TOKEN")
                    or os.getenv("HF_API_KEY")
                )
                if not hf_token:
                    raise RuntimeError(
                        "HF_TOKEN or HUGGING_FACE_HUB_TOKEN environment variable is not set"
                    )

                client = InferenceClient(model=args.llm, token=hf_token)

            else:
                import openai

                if not os.getenv("OPENAI_API_KEY"):
                    raise RuntimeError("OPENAI_API_KEY environment variable is not set")
                openai.api_key = os.environ["OPENAI_API_KEY"]
                if os.getenv("OPENAI_API_BASE"):
                    openai.api_base = os.environ["OPENAI_API_BASE"]

            out_root = Path(__file__).resolve().parent / "final_output"
            out_root.mkdir(exist_ok=True)
            run_dir = out_root / datetime.utcnow().strftime("%Y%m%d_%H%M%S")
            run_dir.mkdir(parents=True)

            for code_path in iter_code_files(repo_path):
                try:
                    code_text = code_path.read_text(encoding="utf-8")
                except Exception:
                    continue
                logging.info("Generating update for %s", code_path)
                prompt = (
                    "You are an expert React developer. Do not add new features. Optimise the following code based on these hints: "
                    + ", ".join(f"{n} ({v:+.2f})" for n, v in top_feats)
                    + "\nCode:\n"
                    + code_text
                )
                if use_openai:
                    logging.debug("Calling OpenAI model %s", args.openai_model)
                    resp = openai.ChatCompletion.create(
                        model=args.openai_model,
                        messages=[{"role": "user", "content": prompt}],
                        max_tokens=512,
                    )
                    generated = resp["choices"][0]["message"]["content"].strip()
                    logging.debug("OpenAI generation complete")
                else:
                    try:
                        # Attempt hosted generation via Hugging Face Hub
                        logging.debug("Calling Hugging Face Inference API: %s", args.llm)
                        generated = client.text_generation(prompt, max_new_tokens=512).strip()
                        logging.debug("HF generation complete")
                    except Exception:
                        # Fall back to local generation using transformers
                        logging.info("Falling back to local model generation")
                        logging.info("Loading local model %s", args.llm)
                        tokenizer = AutoTokenizer.from_pretrained(args.llm)
                        try:
                            model = AutoModelForCausalLM.from_pretrained(
                                args.llm,
                                torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
                                device_map="auto",
                            )
                        except ValueError:
                            logging.debug("Model is seq2seq; using AutoModelForSeq2SeqLM")
                            model = AutoModelForSeq2SeqLM.from_pretrained(
                                args.llm,
                                torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
                                device_map="auto",
                            )

                        logging.info("Local model loaded")
                        inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
                        logging.info("Generating with local model")
                        streamer = TextIteratorStreamer(tokenizer, skip_special_tokens=True)
                        max_pos = getattr(
                            model.config,
                            "max_position_embeddings",
                            getattr(model.config, "n_positions", 2048),
                        )
                        prompt_len = len(inputs["input_ids"][0])
                        if prompt_len >= max_pos:
                            logging.warning(
                                "Prompt too long (%s tokens) for model context (%s); truncating",
                                prompt_len,
                                max_pos,
                            )
                            inputs = tokenizer(
                                prompt,
                                return_tensors="pt",
                                truncation=True,
                                max_length=max_pos - 1,
                            ).to(model.device)
                            prompt_len = len(inputs["input_ids"][0])
                        output_limit = min(1024, max_pos - prompt_len)
                        if output_limit <= 0:
                            logging.error(
                                "Prompt length (%s) leaves no room for generation; skipping",
                                prompt_len,
                            )
                            generated = ""
                            continue
                        gen_kwargs = {
                            **inputs,
                            "max_new_tokens": output_limit,
                            "do_sample": False,
                            "streamer": streamer,
                        }
                        thread = threading.Thread(target=model.generate, kwargs=gen_kwargs)
                        thread.start()
                        tokens = []
                        for token in streamer:
                            tokens.append(token)
                            print(token, end="", flush=True)
                        thread.join()
                        print()
                        generated = "".join(tokens).strip()
                        logging.debug("Local generation complete")


                if "```" in generated:
                    parts = generated.split("```")
                    if len(parts) >= 2:
                        generated = parts[1].strip()

                rel = code_path.relative_to(repo_path).with_suffix("")
                out_dir = run_dir / rel
                out_dir.mkdir(parents=True, exist_ok=True)

                orig_file = out_dir / f"original{code_path.suffix}"
                upd_file = out_dir / f"updated{code_path.suffix}"
                orig_file.write_text(code_text, encoding="utf-8")
                upd_file.write_text(generated, encoding="utf-8")

                save_diff_html(code_text, generated, out_dir / "diff.html")

                perf_orig = out_dir / "perf_original.json"
                perf_upd = out_dir / "perf_updated.json"
                for src, dest in [(orig_file, perf_orig), (upd_file, perf_upd)]:
                    try:
                        subprocess.run(
                            [
                                "node",
                                str(PUPPETEER_SCRIPT),
                                str(src),
                                str(dest),
                            ],
                            check=True,
                        )
                    except Exception as e:
                        logging.warning("Performance check failed for %s: %s", src, e)

                orig_feat = extract_features_from_text(code_text)
                upd_feat = extract_features_from_text(generated)
                orig_pred, orig_conf, _ = predict(orig_feat)
                upd_pred, upd_conf, _ = predict(upd_feat)

                save_comparison_html(
                    orig_feat, upd_feat, orig_pred, upd_pred, out_dir / "metrics.html"
                )

                summary = {
                    "model": args.llm if args.llm else args.openai_model,
                    "original_prediction": orig_pred,
                    "original_confidence": orig_conf,
                    "updated_prediction": upd_pred,
                    "updated_confidence": upd_conf,
                    "top_features": top_feats,
                    "perf_original": str(perf_orig.relative_to(run_dir)),
                    "perf_updated": str(perf_upd.relative_to(run_dir)),
                }
                (out_dir / "summary.json").write_text(
                    json.dumps(summary, indent=2), encoding="utf-8"
                )
                logging.info("Finished processing %s", code_path)

            logging.info("Results saved to %s", run_dir)
            

        except Exception as e:
            logging.error("LLM generation failed: %s", e)
            traceback.print_exc()



if __name__ == "__main__":
    main()
