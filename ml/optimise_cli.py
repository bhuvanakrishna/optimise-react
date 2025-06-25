import argparse
import re
from pathlib import Path
import logging
import joblib
import pandas as pd
import shap

from dotenv import load_dotenv
load_dotenv()

FEATURE_COLUMNS = [
    "depth", "hasLargeImage", "causesLayoutShift", "slowClickHandler",
    "deepComponentTree", "bulkDOMNodes", "slowNetwork", "expensiveEffects",
    "largeJsonState", "layout_row", "pattern_inline-functions", "pattern_lazy-loading",
    "pattern_missing-useMemo", "pattern_misused-useEffect", "pattern_prop-drilling",
    "pattern_repeated-fetching", "pattern_stale-closures", "pattern_too-many-effects",
    "pattern_unstable-props",
]

FEATURE_PROMPT_HINTS = {
    "pattern_inline-functions": "Inline functions in JSX cause unnecessary re-renders. Move them to named functions or useCallback.",
    "pattern_lazy-loading": "Use React.lazy and Suspense to split large components and improve initial load time.",
    "pattern_missing-useMemo": "Use useMemo to memoize expensive computations and avoid recomputation on each render.",
    "pattern_misused-useEffect": "Ensure useEffect hooks have proper dependency arrays to prevent repeated execution.",
    "pattern_prop-drilling": "Prop drilling can lead to tight coupling. Use context or state management libraries to simplify.",
    "pattern_repeated-fetching": "Avoid making the same fetch call repeatedly. Cache or deduplicate API calls.",
    "pattern_stale-closures": "Make sure closures in effects and callbacks capture the latest state.",
    "pattern_too-many-effects": "Combine related useEffect hooks to reduce execution overhead.",
    "pattern_unstable-props": "Avoid creating new object/function props inside render. Use useCallback or useMemo to stabilize.",
    "hasLargeImage": "Large images can delay LCP. Compress or lazy-load them.",
    "bulkDOMNodes": "Too many DOM nodes can slow down rendering. Consider breaking into smaller components or virtualizing.",
    "layout_row": "Avoid fixed-width row layouts. Use responsive design patterns.",
    "slowClickHandler": "Avoid heavy computations in event handlers. Debounce or move to background tasks.",
    "expensiveEffects": "Expensive logic in useEffect should be optimized or debounced.",
    "deepComponentTree": "Deep component trees slow down rendering. Flatten when possible.",
    "slowNetwork": "Minimize bundle size and reduce API latency.",
    "largeJsonState": "Avoid storing large objects in state. Keep state lean.",
    "causesLayoutShift": "Avoid layout shifts by predefining sizes for images and components.",
}

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
        inline_matches = re.findall(r"on\\w+\\s*={(?:\\(.*?\\)\\s*=>|function)", text)
        if inline_matches:
            features["pattern_inline-functions"] = 1
        # Count occurrences of the useEffect hook. A simple string count avoids
        # regex compilation issues on some Python versions.
        features["pattern_too-many-effects"] += text.count("useEffect(")
        if "useMemo(" not in text:
            features["pattern_missing-useMemo"] = 1
        # Flag useEffect hooks that omit a dependency array. Avoid regular
        # expressions here to prevent regex errors across Python versions.
        if "useEffect(" in text:
            try:
                after = text.split("useEffect(", 1)[1]
                params = after.split(")", 1)[0]
                if "[" not in params:
                    features["pattern_misused-useEffect"] = 1
            except Exception:
                pass
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
    conf = (
        float(model.predict_proba(df)[0][1])
        if hasattr(model, "predict_proba")
        else float(pred)
    )
    explainer = shap.Explainer(model)
    shap_values = explainer(df)
    vals = shap_values.values[0]
    top_idx = list(reversed(vals.argsort()[-5:]))
    top_features = [(df.columns[i], float(vals[i])) for i in top_idx if vals[i] > 0.2]
    return pred, conf, top_features


def iter_code_files(base: Path):
    exts = {".js", ".jsx", ".ts", ".tsx"}
    if base.is_file() and base.suffix.lower() in exts:
        yield base
    else:
        for file in base.rglob("*"):
            if file.suffix.lower() in exts:
                yield file


def generate_prompts(repo_path: Path, features: dict, top_feats: list[tuple[str, float]]):
    """Generate a single optimisation prompt covering all project files."""

    prompt_dir = Path(__file__).parent / "prompts"
    prompt_dir.mkdir(exist_ok=True)
    all_prompts_path = prompt_dir / f"{repo_path.name}_prompt.txt"

    active_feats = top_feats or [
        (name, 1.0) for name, val in features.items() if val
    ]
    hints = [
        FEATURE_PROMPT_HINTS.get(name, f"Address issue: {name}")
        for name, _ in active_feats
    ]

    file_entries = []
    for code_path in iter_code_files(repo_path):
        try:
            code_text = code_path.read_text(encoding="utf-8")
        except Exception:
            continue
        relative = code_path.relative_to(repo_path)
        file_entries.append((relative, code_text, code_path.suffix.lstrip(".")))

    if not file_entries:
        return

    header_lines = [
        "You are an expert React performance engineer.",
        "",
        "For each of the following files:",
    ]
    header_lines += [str(p[0]) for p in file_entries] + ["", "Apply the following performance optimizations:"]
    header_lines += ["- " + h for h in hints]
    header_lines += [
        "",
        "For each file, apply the optimizations directly to the code provided below.",
        "Then, return a single ZIP file (base64 encoded) with the original folder structure preserved and no placeholders or dummy files.",
        "\u26a0\ufe0f Do not include explanations, only the optimized code.",
        "",
        "=== Begin Files ===",
        "",
    ]

    file_lines = []
    for rel, text, suffix in file_entries:
        lang = suffix if suffix else "txt"
        file_lines.append(f"--- {rel} ---")
        file_lines.append(f"```{lang}")
        file_lines.append(text)
        file_lines.append("```")
        file_lines.append("")

    prompt = "\n".join(header_lines + file_lines)

    with open(all_prompts_path, "w", encoding="utf-8") as f:
        print(prompt)
        f.write(prompt + "\n")


def main():
    parser = argparse.ArgumentParser(description="Analyse React code for performance patterns")
    parser.add_argument("path", help="Path to React project")
    parser.add_argument("--verbose", action="store_true", help="Enable verbose logging")
    parser.add_argument("--print-prompt-only", action="store_true", help="Only print generated prompt(s)")

    args = parser.parse_args()
    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
    )

    repo_path = Path(args.path)
    if not repo_path.exists():
        print(f"Path not found: {repo_path}")
        return

    features = extract_features(repo_path)
    prediction = confidence = None
    top_feats = []
    try:
        if not args.print_prompt_only or DEFAULT_MODEL.exists():
            prediction, confidence, top_feats = predict(features)
    except Exception as e:
        logging.warning("Prediction failed: %s", e)

    if prediction is not None:
        print("\n=== Prediction ===")
        print(f"Predicted label: {prediction}")
        print(f"Confidence: {confidence:.4f}")
        print("Top SHAP features:")
        for name, val in top_feats:
            print(f"  {name}: {val:+.4f}")

    if args.print_prompt_only:
        generate_prompts(repo_path, features, top_feats)


if __name__ == "__main__":
    main()
