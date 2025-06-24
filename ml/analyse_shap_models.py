import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import shap
import joblib
from pathlib import Path

# Constants
DATASET = Path(__file__).with_name("dataset.csv")
MODELS_DIR = Path(__file__).with_name("models")
SCORES_CSV = MODELS_DIR / "model_scores.csv"
OUTPUT_ROOT = Path(__file__).with_name("shap_results")

LABEL_COLUMN = "label"
DYNAMIC_METRICS = [
    "LCP", "FID", "CLS", "TBT", "renderTime", "jsBundleSizeKB",
    "imageLoadTime", "hasJank",
]


def get_explainer(model, X_encoded, model_name):
    if model_name in ["xgboost", "lightgbm"]:
        return shap.Explainer(model)
    elif hasattr(model, "predict_proba") and model_name != "svm":
        return shap.Explainer(model, X_encoded)
    else:
        print(f"⚠️  Skipping unsupported model: {model_name}")
        return None


def run_shap_and_return_array(model_name: str, model, X: pd.DataFrame):
    output_dir = OUTPUT_ROOT / model_name
    output_dir.mkdir(parents=True, exist_ok=True)

    explainer = get_explainer(model, X, model_name)
    if explainer is None:
        return None, None

    shap_values = explainer(X)

    # Save standard SHAP plots
    plt.figure()
    shap.summary_plot(shap_values, X, show=False)
    plt.tight_layout()
    plt.savefig(output_dir / "summary.png")
    plt.close()

    plt.figure()
    shap.summary_plot(shap_values, X, plot_type="bar", show=False)
    plt.tight_layout()
    plt.savefig(output_dir / "bar.png")
    plt.close()

    print(f"✅ SHAP plots saved for {model_name} in {output_dir}")

    # Extract SHAP values (2D array)
    shap_array = shap_values.values
    if isinstance(shap_array, list):
        shap_array = shap_array[1]
    if getattr(shap_array, "ndim", np.array(shap_array).ndim) == 3:
        shap_array = np.array(shap_array)[:, :, 1]

    return np.abs(shap_array).mean(axis=0), X.columns


def main():
    # Load dataset
    df = pd.read_csv(DATASET)
    drop_cols = ["pageName", LABEL_COLUMN] + [m for m in DYNAMIC_METRICS if m in df.columns]
    X = df.drop(columns=drop_cols)

    # One-hot encode layout and pattern
    for col in X.select_dtypes(include="bool").columns:
        X[col] = X[col].astype(int)
    X = pd.get_dummies(X, columns=["layout", "pattern"], drop_first=True).fillna(0).astype("float32")

    # Load scaler if exists
    scaler_path = MODELS_DIR / "scaler.joblib"
    if scaler_path.exists():
        scaler = joblib.load(scaler_path)
        X_scaled = pd.DataFrame(scaler.transform(X), columns=X.columns)
    else:
        X_scaled = X

    # Read model scores and select top 3 by macro F1
    scores = pd.read_csv(SCORES_CSV)
    scores["f1_macro"] = (scores["f1_fast"] + scores["f1_slow"]) / 2
    top_models = scores.sort_values(by="f1_macro", ascending=False).head(3)["model"]

    # Run SHAP and collect arrays
    shap_arrays = []
    feature_names = None

    for model_name in top_models:
        model_path = MODELS_DIR / f"{model_name}.joblib"
        if not model_path.exists():
            print(f"⚠️ Model file missing: {model_path}")
            continue
        model = joblib.load(model_path)
        shap_arr, features = run_shap_and_return_array(model_name, model, X_scaled)
        if shap_arr is not None and features is not None:
            shap_arrays.append(shap_arr)
            feature_names = features  # set once from any successful model


    if not shap_arrays:
        print("❌ No SHAP arrays collected.")
        return

    # Compute average SHAP
    mean_shap = np.mean(shap_arrays, axis=0)
    sorted_indices = np.argsort(mean_shap)[::-1]
    top_features = [feature_names[i] for i in sorted_indices]
    top_values = mean_shap[sorted_indices]

    # Plot average SHAP bar chart
    plt.figure(figsize=(10, 6))
    plt.barh(top_features[:20][::-1], top_values[:20][::-1])
    plt.xlabel("Average mean(|SHAP value|) across top models")
    plt.title("Top Features by SHAP (Averaged)")
    plt.tight_layout()
    plt.savefig(OUTPUT_ROOT / "average_shap_bar.png")
    plt.close()

    print("✅ Average SHAP bar plot saved at:", OUTPUT_ROOT / "average_shap_bar.png")

    # Optional: add your own interpretations for key features
    interpretations = {
        "expensiveEffects": "Heavy useEffect logic slowing down render",
        "pattern_too-many-effects": "Too many useEffects triggering re-renders",
        "pattern_unstable-props": "Unstable props causing unnecessary updates",
        "pattern_prop-drilling": "Deep prop passing leading to inefficiency",
        "pattern_missing-useMemo": "Missing useMemo for heavy computations",
        "depth": "Deep component nesting increases rendering cost",
        "bulkDOMNodes": "Too many DOM nodes rendered simultaneously",
        "causesLayoutShift": "Causes layout instability (contributes to CLS)",
        "slowNetwork": "Network slowness delays critical content load",
        "hasLargeImage": "Large image assets impacting performance",
        "deepComponentTree": "Many nested components increase processing",
        "layout_row": "Layout row usage may increase layout calculation cost",
        "pattern_inline-functions": "Inline functions break memoization",
        "slowClickHandler": "Heavy logic inside click handlers",
        "largeJsonState": "Huge state objects increase memory and processing time",
        "pattern_lazy-loading": "Lazy loading logic delaying critical resources",
        "pattern_misused-useEffect": "Improper dependencies or misuse of useEffect",
        "pattern_repeated-fetching": "Unnecessary or duplicate API calls",
        "pattern_stale-closures": "Closures referring to outdated state/props",
    }


    # Save HTML table
    html_rows = ["<tr><th>Rank</th><th>Feature</th><th>Avg SHAP</th><th>Interpretation</th></tr>"]
    for i, (feature, value) in enumerate(zip(top_features[:20], top_values[:20]), 1):
        interp = interpretations.get(feature, "—")
        html_rows.append(
            f"<tr><td>{i}</td><td>{feature}</td><td>{value:.4f}</td><td>{interp}</td></tr>"
        )

    html_table = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Top SHAP Features</title>
    <style>
        body {{
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 2rem;
            background-color: #fafafa;
            color: #333;
        }}
        h2 {{
            text-align: center;
            color: #2c3e50;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            overflow: hidden;
        }}
        th, td {{
            padding: 12px 16px;
            text-align: left;
        }}
        th {{
            background-color: #f5f5f5;
            font-weight: 600;
            border-bottom: 1px solid #ddd;
        }}
        tr:nth-child(even) {{
            background-color: #f9f9f9;
        }}
        tr:hover {{
            background-color: #eef6ff;
        }}
        td {{
            border-bottom: 1px solid #eee;
        }}
        .right {{
            text-align: right;
        }}
        .center {{
            text-align: center;
        }}
    </style>
    </head>
    <body>
    <h2>Top Features by SHAP (Averaged Across Models)</h2>
    <table>
        <tr>
        <th class="center">Rank</th>
        <th>Feature</th>
        <th class="right">Avg SHAP</th>
        <th>Interpretation</th>
        </tr>
        {''.join([
            f"<tr><td class='center'>{i}</td><td>{feature}</td><td class='right'>{value:.4f}</td><td>{interpretations.get(feature, '—')}</td></tr>"
            for i, (feature, value) in enumerate(zip(top_features[:20], top_values[:20]), 1)
        ])}
    </table>
    </body>
    </html>
    """


    html_path = OUTPUT_ROOT / "average_shap_table.html"
    with open(html_path, "w") as f:
        f.write(html_table)

    print(f"✅ SHAP table saved to: {html_path}")


if __name__ == "__main__":
    main()
