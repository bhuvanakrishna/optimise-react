import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split, GridSearchCV, StratifiedKFold
from sklearn.preprocessing import StandardScaler
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
from sklearn.preprocessing import LabelEncoder

DATASET = Path(__file__).with_name("dataset.csv")
MODELS_DIR = Path(__file__).with_name("models")
LABEL_COLUMN = "label"

# These are the runtime/dynamic metrics we must exclude from input features
DYNAMIC_METRICS = [
    "LCP",
    "FID",
    "CLS",
    "TBT",
    "renderTime",
    "jsBundleSizeKB",
    "imageLoadTime",
    "hasJank",
]


def main():
    df = pd.read_csv(DATASET)

    # Drop dynamic metrics from inputs
    drop_cols = ["pageName", "pattern", LABEL_COLUMN] + DYNAMIC_METRICS
    X = pd.get_dummies(
        df.drop(columns=drop_cols), columns=["layout"], drop_first=True
    ).astype(float)
    y = df[LABEL_COLUMN]

    # Split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Scale
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Save scaler
    MODELS_DIR.mkdir(exist_ok=True)
    joblib.dump(scaler, MODELS_DIR / "scaler.joblib")

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

    # Encode for XGBoost (if needed)
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)

    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

    for name, model in models.items():
        print(f"\n--- Training {name} ---")
        grid_params = param_grids.get(name)

        if grid_params:
            search = GridSearchCV(
                model, grid_params, cv=cv, n_jobs=-1, scoring="accuracy"
            )
            target = y_encoded[y_train.index] if name == "xgboost" else y_train
            search.fit(X_train_scaled, target)
            best_model = search.best_estimator_
            print(f"Best params: {search.best_params_}")
        else:
            best_model = model.fit(
                X_train_scaled,
                y_encoded[y_train.index] if name == "xgboost" else y_train,
            )

        preds = best_model.predict(X_test_scaled)
        if name == "xgboost":
            preds = le.inverse_transform(preds)
        report = classification_report(y_test, preds)
        print(report)

        joblib.dump(best_model, MODELS_DIR / f"{name}.joblib")
        print(f"{name} model saved ✔️")


if __name__ == "__main__":
    main()
