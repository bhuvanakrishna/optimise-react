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
during the generation step, including progress messages while a local model is
loading. Both decoder-only and sequence-to-sequence models are supported; the
CLI automatically detects the correct architecture when loading a local model.


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
