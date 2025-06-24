import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split, GridSearchCV, StratifiedKFold
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import (
    RandomForestClassifier,
    GradientBoostingClassifier,
    VotingClassifier,
)
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
import xgboost as xgb
import lightgbm as lgb
import joblib

# Paths and constants
DATASET = Path(__file__).with_name("dataset.csv")
MODELS_DIR = Path(__file__).with_name("models")
MODELS_DIR.mkdir(exist_ok=True)
LABEL_COLUMN = "label"
DYNAMIC_METRICS = [
    "LCP", "FID", "CLS", "TBT", "renderTime", "jsBundleSizeKB",
    "imageLoadTime", "hasJank",
]

def main():
    df = pd.read_csv(DATASET)

    # Prepare features
    drop_cols = ["pageName", "pattern", LABEL_COLUMN] + DYNAMIC_METRICS
    X = pd.get_dummies(df.drop(columns=drop_cols), columns=["layout"], drop_first=True).astype(float)
    y = df[LABEL_COLUMN]

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Scaling
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    joblib.dump(scaler, MODELS_DIR / "scaler.joblib")

    # Models and parameters
    models = {
        "decision_tree": DecisionTreeClassifier(),
        "random_forest": RandomForestClassifier(),
        "gradient_boosting": GradientBoostingClassifier(),
        "logistic_regression": LogisticRegression(max_iter=1000),
        "svm": SVC(),
        "xgboost": xgb.XGBClassifier(use_label_encoder=False, eval_metric="logloss"),
        "lightgbm": lgb.LGBMClassifier(),
        "voting": VotingClassifier(
            estimators=[
                ("rf", RandomForestClassifier(n_estimators=50)),
                ("lr", LogisticRegression(max_iter=1000)),
                ("gb", GradientBoostingClassifier()),
            ],
            voting="hard",
        ),
    }

    param_grids = {
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

    # Label encoding for XGBoost
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)

    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

    all_results = []

    for name, model in models.items():
        print(f"\n--- Training {name} ---")
        grid_params = param_grids.get(name)

        # Use label-encoded y if needed
        target = y_encoded[y_train.index] if name == "xgboost" else y_train

        if grid_params:
            search = GridSearchCV(model, grid_params, cv=cv, n_jobs=-1, scoring="accuracy")
            search.fit(X_train_scaled, target)
            best_model = search.best_estimator_
            print(f"Best params: {search.best_params_}")
        else:
            best_model = model.fit(X_train_scaled, target)

        # Predict and evaluate
        preds = best_model.predict(X_test_scaled)
        if name == "xgboost":
            preds = le.inverse_transform(preds)

        report = classification_report(y_test, preds, output_dict=True)
        print(classification_report(y_test, preds))

        # Save model
        joblib.dump(best_model, MODELS_DIR / f"{name}.joblib")
        print(f"{name} model saved ✔️")

        # Store summary for CSV
        all_results.append({
            "model": name,
            "accuracy": report["accuracy"],
            "precision_fast": report["fast"]["precision"],
            "recall_fast": report["fast"]["recall"],
            "f1_fast": report["fast"]["f1-score"],
            "precision_slow": report["slow"]["precision"],
            "recall_slow": report["slow"]["recall"],
            "f1_slow": report["slow"]["f1-score"],
        })

    # Save to CSV
    pd.DataFrame(all_results).to_csv(MODELS_DIR / "model_scores.csv", index=False)
    print("\n✅ All model scores saved to model_scores.csv")

if __name__ == "__main__":
    main()
