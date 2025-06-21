import shap
import pandas as pd
import joblib
import matplotlib.pyplot as plt
from pathlib import Path

# Paths
DATASET = Path(__file__).with_name("dataset.csv")
MODEL = Path(__file__).with_name("models") / "random_forest.joblib"

# Load dataset and model
df = pd.read_csv(DATASET)
X = df.drop(columns=["pageName", "pattern", "label"])
y = df["label"]

# Cast boolean columns to int
for col in X.select_dtypes(include='bool').columns:
    X[col] = X[col].astype(int)

# One-hot encode remaining categoricals like layout
X_encoded = pd.get_dummies(X)

# Load trained model
model = joblib.load(MODEL)

# SHAP analysis
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_encoded)

# SHAP bar plot
# shap.summary_plot(shap_values, X_encoded, plot_type="bar")
shap.summary_plot(shap_values, X_encoded)
