# ML Optimisation Project

This folder contains scripts for analysing the synthetic React app and training
machine learning models. The focus is on tree-based models such as decision
trees, random forests and gradient boosting. Feature data is derived from the
React test pages generated in `synthetic-react-app` which now cover multiple
performance patterns such as prop drilling, unstable props, too many effects,
missing `useMemo` and lazy loading.

Run `generate_dataset.py` to build a CSV dataset from the page configuration.
Each record includes the depth of the component chain, the chosen layout and the
number of UI widgets on the page. After dataset creation use `train_models.py`
to train and persist the models.

## Supported Performance Patterns
The generator can create pages exhibiting the following anti-patterns:
- prop drilling
- unstable props
- too many effects
- missing `useMemo`
- lazy loading
- inline handlers
- effects without dependency arrays

## SHAP Analysis

After training the models you can generate feature importance plots using
`shap_analysis.py`. The script saves a SHAP summary plot, bar plot and a
dependence plot for the most influential feature to the `shap_results`
directory. Run:

```bash
pip install -r requirements.txt
python shap_analysis.py
```

## Optimisation CLI

`optimise_cli.py` can analyse a React project and optionally generate optimised
code with an LLM. You may use a local transformers model with `--llm` or call a
remote OpenAI model with `--openai-model`. Pass `--verbose` to see detailed logs
during the generation step. When using a local model, tokens are streamed to the
terminal so you can monitor progress in real time. If the prompt is longer than
the model's context window it will be truncated to fit. Both decoder-only and
sequence-to-sequence models are supported; the CLI automatically detects the
correct architecture when loading a local model.


### Local model

```bash
python optimise_cli.py /path/to/project --llm path/to/model
```

### Remote OpenAI model

1. Install the `openai` package: `pip install openai`
2. Set the `OPENAI_API_KEY` environment variable with your API key. Optionally
   set `OPENAI_API_BASE` if using a compatible endpoint.
3. Run the CLI specifying the model name:

```bash
python optimise_cli.py /path/to/project --openai-model gpt-3.5-turbo
```

## Evaluation

The machine learning workflow was evaluated against several baselines on a
synthesised dataset of 3,000 React pages. Each page is labelled `fast` or
`slow` using runtime metrics gathered through a Puppeteer profiling script. The
feature set consists of structural properties (component depth, layout choices
and boolean flags for expensive patterns) while dynamic metrics such as LCP and
TBT are reserved as ground truth.

### Baselines

* **Random** – uniform random classifier.
* **Static thresholds** – heuristics based on depth and the presence of bulk DOM
  nodes.
* **ESLint rules** – simplified rule set combining `slowNetwork` and
  `expensiveEffects` flags.
* **Logistic regression** – lightweight model trained on the static features
  using gradient descent.

### Metrics

Precision, recall, F1 score and ROC–AUC are reported on the full dataset. The
table below summarises the results.

| Approach            | Precision | Recall | F1   | ROC‑AUC |
|---------------------|---------:|------:|-----:|-------:|
| Random              | 0.581 | 0.494 | 0.534 | 0.518 |
| Static thresholds   | 0.610 | 0.494 | 0.546 | 0.527 |
| ESLint heuristics   | 0.747 | 0.660 | 0.701 | 0.674 |
| Logistic regression | **0.912** | **0.564** | **0.697** | **0.780** |

Although the logistic model achieves the highest precision and ROC–AUC, recall
remains modest. Future work will include cross‑validation with additional
models such as random forests and gradient boosting, plus a comparison to
metrics reported by Lighthouse on real‑world projects.
