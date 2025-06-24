import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
import xgboost as xgb
import lightgbm as lgb
import joblib
from sklearn.preprocessing import LabelEncoder

DATASET = Path(__file__).with_name('dataset.csv')
MODELS_DIR = Path(__file__).with_name('models')
LABEL_COLUMN = 'label'

# These are the runtime/dynamic metrics we must exclude from input features
DYNAMIC_METRICS = ['LCP', 'FID', 'CLS', 'TBT', 'renderTime', 'jsBundleSizeKB', 'imageLoadTime', 'hasJank']

def main():
    df = pd.read_csv(DATASET)

    # Drop dynamic metrics from inputs
    drop_cols = ['pageName', 'pattern', LABEL_COLUMN] + DYNAMIC_METRICS
    X = pd.get_dummies(df.drop(columns=drop_cols), columns=['layout'], drop_first=True).astype(float)
    y = df[LABEL_COLUMN]

    # Split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Scale
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Save scaler
    MODELS_DIR.mkdir(exist_ok=True)
    joblib.dump(scaler, MODELS_DIR / 'scaler.joblib')

    models = {
        'decision_tree': DecisionTreeClassifier(),
        'random_forest': RandomForestClassifier(n_estimators=100),
        'gradient_boosting': GradientBoostingClassifier(),
        'logistic_regression': LogisticRegression(max_iter=1000),
        'svm': SVC(),
        'xgboost': xgb.XGBClassifier(use_label_encoder=False, eval_metric='logloss'),
        'lightgbm': lgb.LGBMClassifier(),
        'voting': VotingClassifier(estimators=[
            ('rf', RandomForestClassifier(n_estimators=50)),
            ('lr', LogisticRegression(max_iter=1000)),
            ('gb', GradientBoostingClassifier())
        ], voting='hard')
    }

    # Encode for XGBoost (if needed)
    le = LabelEncoder()
    y_encoded = le.fit_transform(y)

    for name, model in models.items():
        print(f"\n--- Training {name} ---")
        if name == 'xgboost':
            model.fit(X_train_scaled, y_encoded[y_train.index])
            preds = model.predict(X_test_scaled)
            preds_decoded = le.inverse_transform(preds)
            print(classification_report(y_test, preds_decoded))
        else:
            model.fit(X_train_scaled, y_train)
            preds = model.predict(X_test_scaled)
            print(classification_report(y_test, preds))

        joblib.dump(model, MODELS_DIR / f'{name}.joblib')
        print(f'{name} model saved ✔️')

if __name__ == '__main__':
    main()
