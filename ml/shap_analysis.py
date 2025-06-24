# this file runs manually for one model given through cli 


import argparse
from pathlib import Path
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import shap
import joblib


DATASET = Path(__file__).with_name("dataset.csv")
MODELS_DIR = Path(__file__).with_name("models")
OUTPUT_ROOT = Path(__file__).with_name("shap_results")

LABEL_COLUMN = "label"
DYNAMIC_METRICS = [
    "LCP", "FID", "CLS", "TBT", "renderTime", "jsBundleSizeKB",
    "imageLoadTime", "hasJank",
]

def load_model(model_name: str):
    path = MODELS_DIR / f"{model_name}.joblib"
    if not path.exists():
        raise FileNotFoundError(f"Model file not found: {path}")
    return joblib.load(path)


def get_explainer(model, X_encoded, model_name):
    """Return the appropriate SHAP explainer based on model type"""
    if model_name == "xgboost":
        return shap.Explainer(model)
    elif model_name == "lightgbm":
        return shap.Explainer(model)
    elif hasattr(model, "predict_proba"):
        return shap.Explainer(model, X_encoded)
    else:
        raise ValueError(f"No suitable SHAP explainer found for {model_name}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--model",
        type=str,
        default="random_forest",
        help="Model name without .joblib",
    )
    args = parser.parse_args()

    model_name = args.model
    model = load_model(model_name)
    OUTPUT_DIR = OUTPUT_ROOT / model_name
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    df = pd.read_csv(DATASET)
    drop_cols = ["pageName", "pattern", LABEL_COLUMN] + DYNAMIC_METRICS
    X = df.drop(columns=drop_cols)

    # Handle boolean & categorical
    for col in X.select_dtypes(include="bool").columns:
        X[col] = X[col].astype(int)
    X_encoded = pd.get_dummies(X, columns=["layout"], drop_first=True)
    X_encoded = X_encoded.fillna(0).astype("float32")

    # Apply the same scaler used during training if available
    scaler_path = MODELS_DIR / "scaler.joblib"
    if scaler_path.exists():
        scaler = joblib.load(scaler_path)
        scaled_array = scaler.transform(X_encoded)
        X_encoded = pd.DataFrame(scaled_array, columns=X_encoded.columns)




    shap.initjs()
    explainer = get_explainer(model, X_encoded, model_name)
    shap_values = explainer(X_encoded)

    # ---- PNG Summary Plot ----
    plt.figure()
    shap.summary_plot(shap_values, X_encoded, show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "summary.png")
    plt.close()

    # ---- PNG Bar Plot ----
    plt.figure()
    shap.summary_plot(shap_values, X_encoded, plot_type="bar", show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "bar.png")
    plt.close()

    # ---- Top Feature Dependence Plot ----
    if hasattr(shap_values, "values"):
        shap_array = shap_values.values
    else:
        shap_array = shap_values

    if isinstance(shap_array, list):
        shap_array = shap_array[1]
    if getattr(shap_array, "ndim", np.array(shap_array).ndim) == 3:
        shap_array = np.array(shap_array)[:, :, 1]

    mean_abs_shap = np.abs(shap_array).mean(axis=0)
    top_indices = np.argsort(mean_abs_shap)[-5:][::-1]
    for i in top_indices:
        feature_name = X_encoded.columns[i]
        plt.figure()
        shap.dependence_plot(feature_name, shap_array, X_encoded, show=False)
        plt.tight_layout()
        plt.savefig(OUTPUT_DIR / f"{feature_name}_dependence.png")
        plt.close()

    # ---- HTML Interactive Summary Plot ----
    # SHAP interactive summary plot (HTML)
    shap.initjs()
    shap_html_path = OUTPUT_DIR / "summary.html"
    summary_force = shap.plots.force(
        explainer.expected_value if isinstance(explainer.expected_value, (int, float)) else explainer.expected_value[1],
        shap_array,
        X_encoded,
    )
    shap.save_html(str(shap_html_path), summary_force)


    # ---- HTML Force Plots (Top 10 Rows) ----
    force_html_path = OUTPUT_DIR / "force_plots.html"
    with open(force_html_path, "w") as f:
        f.write("<html><head>" + shap.getjs() + "</head><body>\n")
        for i in range(min(10, len(X_encoded))):
            force = shap.plots.force(
                explainer.expected_value if isinstance(explainer.expected_value, (int, float)) else explainer.expected_value[1],
                shap_array[i],
                X_encoded.iloc[i],
                matplotlib=False,
            )
            f.write(force.html() + "<br><br>\n")
        f.write("</body></html>")

    print(f"✅ SHAP plots saved in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
