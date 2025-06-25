import argparse
import json
import re
import subprocess
import tempfile
from datetime import datetime
from pathlib import Path
import difflib

import joblib
import pandas as pd
import shap

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
    features["pattern_repeated-fetching"] = int(features["pattern_repeated-fetching"] > 1)
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
    conf = float(model.predict_proba(df)[0][1]) if hasattr(model, "predict_proba") else float(pred)
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


def save_comparison_html(orig_feat: dict, upd_feat: dict, orig_pred: float, upd_pred: float, out_file: Path):
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
        original.splitlines(), updated.splitlines(), fromdesc="Original", todesc="Updated"
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
    parser = argparse.ArgumentParser(description="Analyse React code for performance patterns")
    parser.add_argument("path", help="Path to React project")
    parser.add_argument("--llm", help="Path to local transformers model for code generation")
    args = parser.parse_args()

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

    if args.llm:
        try:
            from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

            tokenizer = AutoTokenizer.from_pretrained(args.llm)
            model = AutoModelForSeq2SeqLM.from_pretrained(args.llm)

            out_root = Path(__file__).resolve().parent / "final_output"
            out_root.mkdir(exist_ok=True)
            run_dir = out_root / datetime.utcnow().strftime("%Y%m%d_%H%M%S")
            run_dir.mkdir(parents=True)

            for code_path in iter_code_files(repo_path):
                try:
                    code_text = code_path.read_text(encoding="utf-8")
                except Exception:
                    continue
                prompt = (
                    "You are an expert React developer. Do not add new features. Optimise the following code based on these hints: "
                    + ", ".join(f"{n} ({v:+.2f})" for n, v in top_feats)
                    + "\nCode:\n"
                    + code_text
                )
                inputs = tokenizer(prompt, return_tensors="pt")
                outputs = model.generate(**inputs, max_length=512)
                generated = tokenizer.decode(outputs[0], skip_special_tokens=True)

                rel = code_path.relative_to(repo_path).with_suffix("")
                out_dir = run_dir / rel
                out_dir.mkdir(parents=True, exist_ok=True)

                orig_file = out_dir / f"original{code_path.suffix}"
                upd_file = out_dir / f"updated{code_path.suffix}"
                orig_file.write_text(code_text, encoding="utf-8")
                upd_file.write_text(generated, encoding="utf-8")

                save_diff_html(code_text, generated, out_dir / "diff.html")

                # Run Puppeteer performance checks
                perf_orig = out_dir / "perf_original.json"
                perf_upd = out_dir / "perf_updated.json"
                for src, dest in [(orig_file, perf_orig), (upd_file, perf_upd)]:
                    try:
                        subprocess.run([
                            "node",
                            str(PUPPETEER_SCRIPT),
                            str(src),
                            str(dest),
                        ], check=True)
                    except Exception as e:
                        print(f"Performance check failed for {src}: {e}")

                orig_feat = extract_features_from_text(code_text)
                upd_feat = extract_features_from_text(generated)
                orig_pred, orig_conf, _ = predict(orig_feat)
                upd_pred, upd_conf, _ = predict(upd_feat)

                save_comparison_html(orig_feat, upd_feat, orig_pred, upd_pred, out_dir / "metrics.html")

                summary = {
                    "model": args.llm,
                    "original_prediction": orig_pred,
                    "original_confidence": orig_conf,
                    "updated_prediction": upd_pred,
                    "updated_confidence": upd_conf,
                    "top_features": top_feats,
                    "perf_original": str(perf_orig),
                    "perf_updated": str(perf_upd),
                }
                (out_dir / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")

            print(f"\nResults saved to {run_dir}")
        except Exception as e:
            print(f"LLM generation failed: {e}")


if __name__ == "__main__":
    main()