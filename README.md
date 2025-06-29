# Optimise React Performance with Machine Learning

This project explores static analysis and machine learning techniques for diagnosing
and optimising performance issues in React applications.

The repository is organised into two main parts:

- **synthetic-react-app** – a small React app used to generate synthetic pages with
  known anti-patterns. Configuration lives in `src/config/testPages.json` and
  runtime metrics are stored under `metrics/`.
- **ml** – Python scripts for building a dataset from the synthetic app,
  training models, analysing feature importance with SHAP, and a CLI for
  predicting performance issues in other projects.

## Getting Started

1. Install Python dependencies:
   ```bash
   pip install -r ml/requirements.txt
   ```
2. Generate the dataset by combining static config and runtime metrics:
   ```bash
   python ml/generate_dataset.py
   ```
3. Train the machine-learning models:
   ```bash
   python ml/train_models.py
   ```
4. Analyse feature importance via SHAP:
   ```bash
   python ml/shap_analysis.py --model gradient_boosting
   ```
5. Inspect or optimise an existing React code base with the CLI:
   ```bash
   python ml/optimise_cli.py /path/to/project --print-prompt-only
   ```

All generated data is written inside the `ml` folder (datasets, models,
SHAP plots and optimisation prompts).

## Repository Structure

```
├── synthetic-react-app   # React project containing test pages
│   ├── src/config        # Page configuration for synthetic pages
│   ├── metrics           # Puppeteer runtime metrics for each page
│   └── ...
└── ml                    # Machine learning and analysis scripts
    ├── generate_dataset.py
    ├── train_models.py
    ├── shap_analysis.py
    ├── optimise_cli.py
    └── requirements.txt
```

Use the scripts in the `ml` directory to reproduce the dataset,
train models and generate SHAP visualisations.
Additional documentation assets can be produced with:
```bash
python ml/generate_tables.py
python ml/generate_figures.py
```
