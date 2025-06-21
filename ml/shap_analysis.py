"""Generate SHAP based feature importance visualisations for the trained model."""

import joblib
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import shap


DATASET = Path(__file__).with_name("dataset.csv")
MODEL = Path(__file__).with_name("models") / "random_forest.joblib"
OUTPUT_DIR = Path(__file__).with_name("shap_results")


def main() -> None:
    """Create SHAP summary, bar and dependence plots."""
    df = pd.read_csv(DATASET)

    drop_cols = [
        "pageName",
        "pattern",
        "LCP",
        "FID",
        "TBT",
        "label",
    ]

    X = df.drop(columns=drop_cols)

    # Cast boolean columns to integers so SHAP can handle them
    for col in X.select_dtypes(include="bool").columns:
        X[col] = X[col].astype(int)

    # Handle categorical encoding
    X_encoded = pd.get_dummies(X, columns=["layout"], drop_first=True)

    model = joblib.load(MODEL)

    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(X_encoded)

    if isinstance(shap_values, list):
        # Older versions return a list by class index
        values = shap_values[1]
    elif shap_values.ndim == 3:
        # Newer versions return (n_samples, n_features, n_classes)
        values = shap_values[:, :, 1]
    else:
        values = shap_values

    OUTPUT_DIR.mkdir(exist_ok=True)

    # Summary (beeswarm) plot
    plt.figure()
    shap.summary_plot(values, X_encoded, show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "summary.png")
    plt.close()

    # Mean absolute SHAP value bar plot
    plt.figure()
    shap.summary_plot(values, X_encoded, plot_type="bar", show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "bar.png")
    plt.close()

    # Dependence plot for the most important feature
    mean_abs_shap = np.abs(values).mean(axis=0)
    top_feature = X_encoded.columns[np.argmax(mean_abs_shap)]
    plt.figure()
    shap.dependence_plot(top_feature, values, X_encoded, show=False)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / f"{top_feature}_dependence.png")
    plt.close()


if __name__ == "__main__":
    main()
