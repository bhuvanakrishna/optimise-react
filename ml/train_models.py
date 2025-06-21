import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import classification_report
import joblib

DATASET = Path(__file__).with_name('dataset.csv')
MODELS_DIR = Path(__file__).with_name('models')
LABEL_COLUMN = 'label'

def main():
    df = pd.read_csv(DATASET)

    # Target
    y = df[LABEL_COLUMN]

    # Features to drop
    # Exclude metrics that were used to derive the label to avoid
    # information leakage during training. Otherwise models can
    # trivially achieve perfect accuracy by looking at these fields.
    drop_cols = [
        'pageName',
        'pattern',
        'LCP',
        'FID',
        'TBT',
        LABEL_COLUMN,
    ]

    # Handle categorical encoding
    df_encoded = pd.get_dummies(df.drop(columns=drop_cols), columns=['layout'], drop_first=True)

    # Ensure all data is numeric
    X = df_encoded.astype(float)

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    MODELS_DIR.mkdir(exist_ok=True)

    models = {
        'decision_tree': DecisionTreeClassifier(),
        'random_forest': RandomForestClassifier(n_estimators=100),
        'gradient_boosting': GradientBoostingClassifier()
    }

    for name, model in models.items():
        model.fit(X_train, y_train)
        preds = model.predict(X_test)
        print(f"--- {name} ---")
        print(classification_report(y_test, preds))
        joblib.dump(model, MODELS_DIR / f'{name}.joblib')
        print(f'{name} model saved')


if __name__ == '__main__':
    main()
