import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import shap
import joblib

from sklearn.preprocessing import LabelEncoder

DATASET = Path(__file__).with_name("dataset.csv")
MODELS_DIR = Path(__file__).with_name("models")
OUTPUT_ROOT = Path(__file__).with_name("shap_results")


def load_model(model_name: str):
    path = MODELS_DIR / f"{model_name}.joblib"
    if not path.exists():
        raise FileNotFoundError(f"Model file not found: {path}")
    return joblib.load(path)


def get_explainer(model, X_encoded, model_name):
    """Return the appropriate SHAP explainer based on model type"""
    if model_name == "xgboost":
        import xgboost as xgb
        return shap.Explainer(model)
    elif model_name == "lightgbm":
        import lightgbm as lgb
        return shap.Explainer(model)
    elif hasattr(model, "predict_proba"):
        # Tree-based or linear
        return shap.Explainer(model, X_encoded)
    else:
        raise ValueError(f"No suitable SHAP explainer found for {model_name}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", type=str, default="random_forest", help="Model name without .joblib")
    args = parser.parse_args()

    model_name = args.model
    model = load_model(model_name)
    OUTPUT_DIR = OUTPUT_ROOT / model_name
    OUTPUT_DIR.mkdir(exist_ok=True)

    df = pd.read_csv(DATASET)

    drop_cols = [
        "pageName", "pattern", "LCP", "FID", "TBT", "label"
    ]
    X = df.drop(columns=drop_cols)

    # Handle boolean & categorical
    # Handle boolean & categorical
    for col in X.select_dtypes(include="bool").columns:
        X[col] = X[col].astype(int)

    X_encoded = pd.get_dummies(X, columns=["layout"], drop_first=True)

    # Fix: ensure no nulls and all float type
    X_encoded = X_encoded.fillna(0).astype("float32")


    # Encode label if needed (for some models like XGBoost)
    label_encoder = LabelEncoder()
    y = label_encoder.fit_transform(df["label"])

    explainer = get_explainer(model, X_encoded, model_name)
    shap_values = explainer(X_encoded)

    # Summary (beeswarm)
    plt.figure()
    shap.summary_plot(shap_values, X_encoded, show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "summary.png")
    plt.close()

    # Bar plot
    plt.figure()
    shap.summary_plot(shap_values, X_encoded, plot_type="bar", show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "bar.png")
    plt.close()

    # Dependence plot for top feature
    mean_abs_shap = np.abs(shap_values.values).mean(axis=0)
    top_feature = X_encoded.columns[np.argmax(mean_abs_shap)]
    plt.figure()
    
    # Determine proper SHAP values shape
    if hasattr(shap_values, "values"):
        shap_array = shap_values.values
    elif isinstance(shap_values, list):
        shap_array = shap_values[1]  # For binary classifier: class 1
    elif shap_values.ndim == 3:
        shap_array = shap_values[:, :, 1]
    else:
        shap_array = shap_values

    # Now safe to call
    shap.dependence_plot(top_feature, shap_array, X_encoded, show=False)

    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / f"{top_feature}_dependence.png")
    plt.close()

    print(f"✅ SHAP plots saved in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
