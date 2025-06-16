import csv
from pathlib import Path

try:
    from sklearn.model_selection import train_test_split
    from sklearn.tree import DecisionTreeClassifier
    from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
    import joblib
except Exception as e:  # pylint: disable=broad-except
    print("Required ML packages not installed:", e)
    DecisionTreeClassifier = RandomForestClassifier = GradientBoostingClassifier = None

DATASET = Path(__file__).with_name('dataset.csv')
MODELS_DIR = Path(__file__).with_name('models')


def main() -> None:
    with DATASET.open() as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    X = [[int(r['depth'])] for r in rows]
    y = [r['pattern'] for r in rows]

    if DecisionTreeClassifier is None:
        print("Scikit-learn not available; skipping model training")
        return

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    MODELS_DIR.mkdir(exist_ok=True)

    models = {
        'decision_tree': DecisionTreeClassifier(),
        'random_forest': RandomForestClassifier(n_estimators=100),
        'gradient_boosting': GradientBoostingClassifier()
    }

    for name, model in models.items():
        model.fit(X_train, y_train)
        joblib.dump(model, MODELS_DIR / f'{name}.joblib')
        print(f'{name} trained and saved')

if __name__ == '__main__':
    main()
