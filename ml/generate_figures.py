"""Generate improved documentation figures for the project."""

from __future__ import annotations
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, FancyArrow

plt.style.use("seaborn-v0_8-whitegrid")
plt.rcParams.update({"font.size": 12})

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    ConfusionMatrixDisplay,
    precision_recall_curve,
    roc_curve,
    auc,
    classification_report
)

# ---------- Paths ----------
DATASET = Path(__file__).with_name("dataset.csv")
FIG_DIR = Path(__file__).with_name("figures")
FIG_DIR.mkdir(exist_ok=True)


# ---------- Utility: train simple model ----------

def load_and_train():
    df = pd.read_csv(DATASET)
    drop_cols = [
        'pageName', 'label', 'LCP', 'FID', 'CLS', 'TBT',
        'renderTime', 'jsBundleSizeKB', 'imageLoadTime', 'hasJank'
    ]
    X = pd.get_dummies(df.drop(columns=drop_cols), columns=['layout', 'pattern'], drop_first=True).astype(float)
    y = df['label']
    X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    scaler = StandardScaler()
    X_tr = scaler.fit_transform(X_tr)
    X_te = scaler.transform(X_te)
    model = LogisticRegression(max_iter=1000)
    model.fit(X_tr, y_tr)
    return model, X_te, y_te, scaler


# ---------- Figure 3.1 Feature Distributions ----------

# def feature_distribution():
#     df = pd.read_csv(DATASET)
#     features = [c for c in ["depth", "expensiveEffects", "bulkDOMNodes", "hasLargeImage"] if c in df.columns]
#     fig, axes = plt.subplots(1, len(features), figsize=(5 * len(features), 4))
#     if len(features) == 1:
#         axes = [axes]
#     for ax, feat in zip(axes, features):
#         if df[feat].dropna().nunique() <= 2:
#             counts = df[feat].value_counts().sort_index()
#             ax.bar(counts.index.astype(str), counts.values, color="#4c72b0")
#         else:
#             ax.hist(df[feat], bins=10, color="#4c72b0")
#         ax.set_title(feat, fontsize=10)
#         ax.set_ylabel("Number of Components", fontsize=9)
#         ax.tick_params(axis='both', labelsize=8)
#     fig.suptitle(f"Feature Distributions in Synthetic Dataset (N={len(df)})", fontsize=12)
#     fig.tight_layout(rect=[0, 0, 1, 0.95])
#     fig.savefig(FIG_DIR / "feature_distribution.png", dpi=300)
#     plt.close(fig)

def feature_distribution():
    df = pd.read_csv(DATASET)
    # features = [c for c in ["depth", "expensiveEffects", "bulkDOMNodes", "hasLargeImage"] if c in df.columns]
    # Exclude columns that are identifiers or labels
    exclude_cols = [
        'pageName', 'label', 'LCP', 'FID', 'CLS', 'TBT',
        'renderTime', 'jsBundleSizeKB', 'imageLoadTime', 'hasJank'
    ]
    features = [c for c in df.columns if c not in exclude_cols]


    for feat in features:
        plt.figure(figsize=(5, 4))
        if df[feat].dropna().nunique() <= 2:
            counts = df[feat].value_counts().sort_index()
            plt.bar(counts.index.astype(str), counts.values, color="#4c72b0")
        else:
            plt.hist(df[feat], bins=10, color="#4c72b0")

        plt.title(f"{feat} Distribution (N={len(df)})", fontsize=12)
        plt.ylabel("Number of Components", fontsize=10)
        plt.xlabel(feat, fontsize=10)
        plt.xticks(fontsize=9)
        plt.yticks(fontsize=9)
        plt.tight_layout()
        plt.savefig(FIG_DIR / f"feature_{feat}.png", dpi=300)
        plt.close()



# ---------- Figure 4.x Evaluation Plots ----------

def evaluation_plots():
    model, X_te, y_te, _ = load_and_train()
    y_pred = model.predict(X_te)
    proba = model.predict_proba(X_te)[:, 1]

    # Classification report
    report = classification_report(y_te, y_pred, output_dict=True)
    metrics_text = (
        f"Accuracy: {report['accuracy']:.2f}\n"
        f"Precision (fast): {report['fast']['precision']:.2f}\n"
        f"Recall (fast): {report['fast']['recall']:.2f}\n"
        f"F1 (fast): {report['fast']['f1-score']:.2f}\n"
        f"Precision (slow): {report['slow']['precision']:.2f}\n"
        f"Recall (slow): {report['slow']['recall']:.2f}\n"
        f"F1 (slow): {report['slow']['f1-score']:.2f}"
    )

    # Precision-Recall Curve
    prec, recall, _ = precision_recall_curve((y_te == "slow").astype(int), proba)
    pr_auc = auc(recall, prec)
    plt.figure()
    plt.plot(recall, prec, label=f"AUC = {pr_auc:.2f}", linewidth=2)
    plt.xlabel("Recall")
    plt.ylabel("Precision")
    plt.title("Precision-Recall Curve (Logistic Regression)\nPositive class: 'slow'", fontsize=12)
    plt.legend(loc="best")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(FIG_DIR / "precision_recall.png", dpi=300)
    plt.close()

    # ROC Curve
    fpr, tpr, _ = roc_curve((y_te == "slow").astype(int), proba)
    roc_auc = auc(fpr, tpr)
    plt.figure()
    plt.plot(fpr, tpr, label=f"AUC = {roc_auc:.2f}", linewidth=2)
    plt.plot([0,1], [0,1], linestyle='--', color='grey')
    plt.xlabel("False Positive Rate")
    plt.ylabel("True Positive Rate")
    plt.title("ROC Curve (Logistic Regression)\nPositive class: 'slow'", fontsize=12)
    plt.legend(loc="lower right")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(FIG_DIR / "roc_curve.png", dpi=300)
    plt.close()

    # Confusion Matrix
    fig, ax = plt.subplots(figsize=(5, 4))
    disp = ConfusionMatrixDisplay.from_predictions(
        y_te, y_pred,
        cmap='Blues',
        ax=ax,
        colorbar=True
    )
    for texts in disp.text_.ravel():
        texts.set_fontsize(10)
    ax.set_title("Confusion Matrix (Logistic Regression)", fontsize=12)
    plt.figtext(0.5, -0.25, metrics_text, wrap=True, horizontalalignment='center', fontsize=10)
    fig.tight_layout()
    fig.savefig(FIG_DIR / "confusion_matrix.png", dpi=300, bbox_inches="tight")
    plt.close(fig)


# ---------- Main ----------

def main():
    feature_distribution()
    evaluation_plots()
    print(f'Figures saved to {FIG_DIR}')


if __name__ == '__main__':
    main()
