"""Generate project summary tables for documentation."""

from __future__ import annotations

from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import f1_score, precision_score, recall_score, roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

DATASET = Path(__file__).with_name("dataset.csv")
OUTPUT = Path(__file__).with_name("report_tables.md")

FEATURE_COLUMNS = [
    "depth", "hasLargeImage", "causesLayoutShift", "slowClickHandler",
    "deepComponentTree", "bulkDOMNodes", "slowNetwork", "expensiveEffects",
    "largeJsonState", "layout_row", "pattern_inline-functions",
    "pattern_lazy-loading", "pattern_missing-useMemo",
    "pattern_misused-useEffect", "pattern_prop-drilling",
    "pattern_repeated-fetching", "pattern_stale-closures",
    "pattern_too-many-effects", "pattern_unstable-props",
]

PARAM_GRIDS = {
    "random_forest": {
        "n_estimators": [100, 200],
        "max_depth": [None, 5, 10],
        "min_samples_split": [2, 5],
    },
    "gradient_boosting": {
        "n_estimators": [100, 200],
        "learning_rate": [0.05, 0.1],
        "max_depth": [3, 5],
    },
    "logistic_regression": {"C": [0.1, 1.0, 10.0]},
    "svm": {"C": [0.1, 1, 10], "kernel": ["linear", "rbf"]},
    "xgboost": {
        "n_estimators": [100, 200],
        "learning_rate": [0.05, 0.1],
        "max_depth": [3, 5],
    },
    "lightgbm": {
        "n_estimators": [100, 200],
        "learning_rate": [0.05, 0.1],
        "num_leaves": [31, 63],
    },
}


def random_baseline(y_true: pd.Series) -> pd.Series:
    return pd.Series(
        pd.Categorical(np.random.choice(["fast", "slow"], size=len(y_true)),
                       categories=["fast", "slow"])
    )


def static_thresholds_baseline(X: pd.DataFrame) -> pd.Series:
    cond = (
        (X["depth"] >= 4)
        | (X["bulkDOMNodes"].astype(bool))
        | (X["expensiveEffects"].astype(bool))
        | (X["hasLargeImage"].astype(bool))
    )
    return pd.Series(np.where(cond, "slow", "fast"))


def eslint_heuristics_baseline(X: pd.DataFrame) -> pd.Series:
    flags = [
        "hasLargeImage", "causesLayoutShift", "slowClickHandler",
        "deepComponentTree", "bulkDOMNodes", "slowNetwork",
        "expensiveEffects", "largeJsonState",
    ]
    total_flags = X[flags].astype(bool).sum(axis=1)
    return pd.Series(np.where(total_flags >= 3, "slow", "fast"))


def evaluate_model(model, X_tr, X_te, y_tr, y_te):
    model.fit(X_tr, y_tr)
    preds = model.predict(X_te)
    proba = model.predict_proba(X_te)[:, 1]
    return {
        "precision": precision_score(y_te, preds, pos_label="slow"),
        "recall": recall_score(y_te, preds, pos_label="slow"),
        "f1": f1_score(y_te, preds, pos_label="slow"),
        "roc_auc": roc_auc_score((y_te == "slow").astype(int), proba),
    }


def calc_metrics(preds, y_true):
    preds = pd.Series(preds, index=y_true.index)
    return {
        "precision": precision_score(y_true, preds, pos_label="slow"),
        "recall": recall_score(y_true, preds, pos_label="slow"),
        "f1": f1_score(y_true, preds, pos_label="slow"),
        "roc_auc": roc_auc_score((y_true == "slow").astype(int),
                                 (preds == "slow").astype(float)),
    }


def table_performance(df: pd.DataFrame) -> pd.DataFrame:
    drop_cols = [
        "pageName", "label", "LCP", "FID", "CLS", "TBT",
        "renderTime", "jsBundleSizeKB", "imageLoadTime", "hasJank",
    ]
    X = pd.get_dummies(df.drop(columns=drop_cols),
                       columns=["layout", "pattern"], drop_first=True).astype(float)
    y = df["label"]

    X_tr, X_te, y_tr, y_te = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    scaler = StandardScaler()
    X_tr = scaler.fit_transform(X_tr)
    X_te = scaler.transform(X_te)

    models = {
        "logistic_regression": LogisticRegression(max_iter=1000),
        "random_forest": RandomForestClassifier(),
        "gradient_boosting": GradientBoostingClassifier(),
    }

    rows = []
    for name, model in models.items():
        metrics = evaluate_model(model, X_tr, X_te, y_tr, y_te)
        rows.append({"model": name, **metrics})

    rows.append({"model": "random_baseline",
                 **calc_metrics(random_baseline(y_te), y_te)})
    rows.append({"model": "static_thresholds",
                 **calc_metrics(static_thresholds_baseline(df.drop(columns=drop_cols)), y)})
    rows.append({"model": "eslint_heuristics",
                 **calc_metrics(eslint_heuristics_baseline(df.drop(columns=drop_cols)), y)})

    return pd.DataFrame(rows)


def table_dataset_summary(df: pd.DataFrame) -> pd.DataFrame:
    summary = {
        "total_components": len(df),
        "fast": int((df["label"] == "fast").sum()),
        "slow": int((df["label"] == "slow").sum()),
        "avg_depth": df["depth"].mean(),
    }
    cols = [c for c in ["hasLargeImage", "bulkDOMNodes", "expensiveEffects"] if c in df.columns]
    for c in cols:
        summary[f"avg_{c}"] = df[c].astype(float).mean()
    return pd.DataFrame([summary])


def table_feature_list() -> pd.DataFrame:
    descriptions = {
        "depth": "Maximum folder depth of the project",
        "hasLargeImage": "Images exceeding 200 kB present",
        "causesLayoutShift": "Elements that shift layout on load",
        "slowClickHandler": "Event handlers with heavy logic",
        "deepComponentTree": "Overall component nesting depth",
        "bulkDOMNodes": "Large number of DOM nodes rendered",
        "slowNetwork": "Flag for simulated network slowdown",
        "expensiveEffects": "useEffect hooks with expensive code",
        "largeJsonState": "Stores large JSON objects in state",
        "layout_row": "Row based layout usage",
        "pattern_inline-functions": "Inline functions in JSX",
        "pattern_lazy-loading": "Dynamic import / React.lazy usage",
        "pattern_missing-useMemo": "Heavy calculations missing memoization",
        "pattern_misused-useEffect": "Effects without dependency arrays",
        "pattern_prop-drilling": "Deep prop passing chains",
        "pattern_repeated-fetching": "Multiple identical fetches",
        "pattern_stale-closures": "Callbacks capturing stale state",
        "pattern_too-many-effects": "Too many useEffect hooks",
        "pattern_unstable-props": "Props recreated every render",
    }
    rows = [(feat, descriptions.get(feat, "")) for feat in FEATURE_COLUMNS]
    return pd.DataFrame(rows, columns=["feature", "description"])


def table_hyperparameters() -> pd.DataFrame:
    rows = []
    for model, grid in PARAM_GRIDS.items():
        for param, values in grid.items():
            rows.append({"model": model, "param": param, "values": str(values)})
    return pd.DataFrame(rows)


def table_baselines() -> pd.DataFrame:
    return pd.DataFrame([
        ["random", "Uniform random predictions"],
        ["static_thresholds", "Threshold on depth, bulk DOM nodes and image size"],
        ["eslint_heuristics", "Counts of common performance flags"],
    ], columns=["baseline", "definition"])


def main():
    df = pd.read_csv(DATASET)
    tables = {
        "1.1": table_performance(df),
        "3.1": table_dataset_summary(df),
        "3.2": table_feature_list(),
        "3.3": table_baselines(),
        "3.4": table_hyperparameters(),
    }
    md_parts = []
    for key, table in tables.items():
        md_parts.append(f"### Table {key}\n")
        md_parts.append(table.to_markdown(index=False))
        md_parts.append("\n")
    OUTPUT.write_text("\n".join(md_parts))
    print(f"Tables written to {OUTPUT}")


if __name__ == "__main__":
    main()
