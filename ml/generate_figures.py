"""Generate high-quality figures for the project documentation."""

from __future__ import annotations
from pathlib import Path

import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, FancyArrow

# Use a clean, publication-quality style across all figures
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
)

# ---------- Paths ----------
DATASET = Path(__file__).with_name("dataset.csv")
FIG_DIR = Path(__file__).with_name("figures")
FIG_DIR.mkdir(exist_ok=True)


# ---------- Figure 1.1 Pipeline Overview ----------

def pipeline_overview():
    fig, ax = plt.subplots(figsize=(12, 2))
    ax.axis('off')
    stages = [
        "Synthetic\nData",
        "AST\nParsing",
        "Feature\nExtraction",
        "Model\nTraining",
        "Evaluation",
        "CLI\nIntegration",
    ]
    for i, stage in enumerate(stages):
        ax.add_patch(Rectangle((i*1.8, 0.4), 1.6, 0.8, edgecolor='black', facecolor='#e0e0e0'))
        ax.text(i*1.8+0.8, 0.8, stage, ha='center', va='center', fontsize=10)
        if i < len(stages)-1:
            ax.add_patch(FancyArrow(i*1.8+1.6, 0.8, 0.2, 0, width=0.03, length_includes_head=True, head_width=0.2))
    ax.set_title("Figure 1.1: Project Pipeline Overview", fontsize=12)
    fig.tight_layout()
    fig.savefig(FIG_DIR / 'pipeline_overview.png', dpi=300)
    plt.close(fig)


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


# ---------- Figure 2.1 Sample Synthetic Component ----------

def component_snippet():
    src = (
        Path(__file__).resolve().parents[1]
        / "synthetic-react-app"
        / "src"
        / "pages"
        / "test-data"
        / "inefficientcontextTest1"
        / "Parent.tsx"
    )
    code = src.read_text().splitlines()[:25]
    fig, ax = plt.subplots(figsize=(8, 6))
    ax.axis("off")
    ax.text(0, 1, "\n".join(code), family="monospace", va="top", fontsize=10)
    ax.set_title("Figure 2.1: Sample Synthetic React Component Snippet", fontsize=12)
    fig.tight_layout()
    fig.savefig(FIG_DIR / "component_snippet.png", dpi=300)
    plt.close(fig)


# ---------- Figure 3.1 Feature Distributions ----------

def feature_distribution():
    df = pd.read_csv(DATASET)
    features = [c for c in ["depth", "expensiveEffects", "bulkDOMNodes", "hasLargeImage"] if c in df.columns]
    fig, axes = plt.subplots(1, len(features), figsize=(5 * len(features), 4))
    if len(features) == 1:
        axes = [axes]
    for ax, feat in zip(axes, features):
        if df[feat].dropna().nunique() <= 2:
            counts = df[feat].value_counts().sort_index()
            ax.bar(counts.index.astype(str), counts.values, color="#4c72b0")
        else:
            ax.hist(df[feat], bins=10, color="#4c72b0")
        ax.set_title(feat, fontsize=10)
        ax.set_ylabel("Number of Components", fontsize=9)
        ax.tick_params(axis='both', labelsize=8)
    fig.suptitle("Figure 3.1: Feature Distributions in Synthetic Dataset", fontsize=12)
    fig.tight_layout(rect=[0, 0, 1, 0.95])
    fig.savefig(FIG_DIR / "feature_distribution.png", dpi=300)
    plt.close(fig)


# ---------- Figure 4.x Evaluation Plots ----------

def evaluation_plots():
    model, X_te, y_te, _ = load_and_train()
    proba = model.predict_proba(X_te)[:, 1]

    # Precision-Recall Curve
    prec, recall, _ = precision_recall_curve((y_te == "slow").astype(int), proba)
    pr_auc = auc(recall, prec)
    plt.figure()
    plt.plot(recall, prec, label=f"AUC = {pr_auc:.2f}")
    plt.xlabel("Recall")
    plt.ylabel("Precision")
    plt.title("Figure 4.1: Precision-Recall Curve (Logistic Regression)", fontsize=12)
    plt.legend(loc="best")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(FIG_DIR / "precision_recall.png", dpi=300)
    plt.close()

    # ROC Curve
    fpr, tpr, _ = roc_curve((y_te == "slow").astype(int), proba)
    roc_auc = auc(fpr, tpr)
    plt.figure()
    plt.plot(fpr, tpr, label=f"AUC = {roc_auc:.2f}")
    plt.plot([0,1], [0,1], linestyle='--', color='grey')
    plt.xlabel("False Positive Rate")
    plt.ylabel("True Positive Rate")
    plt.title("Figure 4.2: ROC Curve (Logistic Regression)", fontsize=12)
    plt.legend(loc="lower right")
    plt.grid(True)
    plt.tight_layout()
    plt.savefig(FIG_DIR / "roc_curve.png", dpi=300)
    plt.close()

    # Confusion Matrix
    fig, ax = plt.subplots(figsize=(5, 4))
    disp = ConfusionMatrixDisplay.from_predictions(
        y_te, model.predict(X_te),
        cmap='Blues',
        ax=ax,
        colorbar=True
    )
    ax.set_title("Figure 4.3: Confusion Matrix (Logistic Regression)", fontsize=12)
    fig.tight_layout()
    fig.savefig(FIG_DIR / "confusion_matrix.png", dpi=300)
    plt.close(fig)


# ---------- Main ----------

def main():
    pipeline_overview()
    component_snippet()
    feature_distribution()
    evaluation_plots()
    print(f'Figures saved to {FIG_DIR}')


if __name__ == '__main__':
    main()
