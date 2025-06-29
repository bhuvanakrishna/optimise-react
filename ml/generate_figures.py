"""Generate documentation figures for the project."""
from __future__ import annotations

from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, FancyArrow
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    ConfusionMatrixDisplay,
    precision_recall_curve,
    roc_curve,
)

DATASET = Path(__file__).with_name("dataset.csv")
FIG_DIR = Path(__file__).with_name("figures")
FIG_DIR.mkdir(exist_ok=True)


# ---------- Figure 1.1 Pipeline Overview ----------

def pipeline_overview():
    fig, ax = plt.subplots(figsize=(10, 2))
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
        ax.add_patch(Rectangle((i*1.6, 0.4), 1.4, 0.8, edgecolor='black', facecolor='#e0e0e0'))
        ax.text(i*1.6+0.7, 0.8, stage, ha='center', va='center')
        if i < len(stages)-1:
            ax.add_patch(FancyArrow(i*1.6+1.4, 0.8, 0.2, 0, width=0.05, length_includes_head=True, head_width=0.2))
    fig.savefig(FIG_DIR / 'pipeline_overview.png')
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
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.axis("off")
    ax.text(0, 1, "\n".join(code), family="monospace", va="top")
    fig.savefig(FIG_DIR / "component_snippet.png")
    plt.close(fig)


# ---------- Figure 3.1 Feature Distributions ----------

def feature_distribution():
    df = pd.read_csv(DATASET)
    features = [c for c in ["depth", "expensiveEffects", "bulkDOMNodes", "hasLargeImage"] if c in df.columns]
    fig, axes = plt.subplots(1, len(features), figsize=(4 * len(features), 3))
    if len(features) == 1:
        axes = [axes]
    for ax, feat in zip(axes, features):
        if df[feat].dropna().nunique() <= 2:
            counts = df[feat].value_counts().sort_index()
            ax.bar(counts.index.astype(str), counts.values)
        else:
            ax.hist(df[feat], bins=10)
        ax.set_title(feat)
    fig.tight_layout()
    fig.savefig(FIG_DIR / "feature_distribution.png")
    plt.close(fig)


# ---------- Figure 4.x Evaluation Curves ----------

def evaluation_plots():
    model, X_te, y_te, _ = load_and_train()
    proba = model.predict_proba(X_te)[:, 1]

    prec, recall, _ = precision_recall_curve((y_te == "slow").astype(int), proba)
    plt.figure()
    plt.plot(recall, prec)
    plt.xlabel("Recall")
    plt.ylabel("Precision")
    plt.savefig(FIG_DIR / "precision_recall.png")
    plt.close()

    fpr, tpr, _ = roc_curve((y_te == "slow").astype(int), proba)
    plt.figure()
    plt.plot(fpr, tpr)
    plt.xlabel("False Positive Rate")
    plt.ylabel("True Positive Rate")
    plt.savefig(FIG_DIR / "roc_curve.png")
    plt.close()

    ConfusionMatrixDisplay.from_predictions(y_te, model.predict(X_te))
    plt.savefig(FIG_DIR / "confusion_matrix.png")
    plt.close()


def main():
    pipeline_overview()
    component_snippet()
    feature_distribution()
    evaluation_plots()
    print(f'Figures saved to {FIG_DIR}')


if __name__ == '__main__':
    main()
