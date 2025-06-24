import argparse
import json
import os
import re
from pathlib import Path

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
    explainer = shap.Explainer(model, df)
    shap_values = explainer(df)
    vals = shap_values.values[0]
    top_idx = list(reversed(vals.argsort()[-5:]))
    top_features = [(df.columns[i], float(vals[i])) for i in top_idx]
    return pred, top_features


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
    prediction, top_feats = predict(features)

    print("\n=== Prediction ===")
    print(f"Predicted label: {prediction}")
    print("Top SHAP features:")
    for name, val in top_feats:
        print(f"  {name}: {val:+.4f}")

    if args.llm:
        try:
            from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

            tokenizer = AutoTokenizer.from_pretrained(args.llm)
            model = AutoModelForSeq2SeqLM.from_pretrained(args.llm)
            with open(next(repo_path.rglob("*.jsx")), "r") as f:
                code_snippet = f.read()[:1000]
            prompt = (
                "You are an expert React developer. Optimise the following code based on these hints: "
                + ", ".join(f"{n} ({v:+.2f})" for n, v in top_feats)
                + "\nCode:\n"
                + code_snippet
            )
            inputs = tokenizer(prompt, return_tensors="pt")
            outputs = model.generate(**inputs, max_length=512)
            generated = tokenizer.decode(outputs[0], skip_special_tokens=True)
            print("\n=== Suggested Code ===\n")
            print(generated)
        except Exception as e:
            print(f"LLM generation failed: {e}")


if __name__ == "__main__":
    main()
