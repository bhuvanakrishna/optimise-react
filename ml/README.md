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
python shap_analysis.py
```
