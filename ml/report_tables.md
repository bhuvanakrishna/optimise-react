### Table 1.1

| model               |   precision |   recall |       f1 |   roc_auc |
|:--------------------|------------:|---------:|---------:|----------:|
| logistic_regression |    0.950147 | 0.928367 | 0.93913  |  0.959668 |
| random_forest       |    0.925287 | 0.922636 | 0.92396  |  0.952128 |
| gradient_boosting   |    0.958457 | 0.925501 | 0.941691 |  0.955011 |
| random_baseline     |    0.585209 | 0.52149  | 0.551515 |  0.503773 |
| static_thresholds   |    0.631347 | 0.904353 | 0.743584 |  0.584553 |
| eslint_heuristics   |    0.711129 | 0.497709 | 0.58558  |  0.608105 |


### Table 3.1

|   total_components |   fast |   slow |   avg_depth |   avg_hasLargeImage |   avg_bulkDOMNodes |   avg_expensiveEffects |
|-------------------:|-------:|-------:|------------:|--------------------:|-------------------:|-----------------------:|
|               3000 |   1254 |   1746 |         3.5 |               0.324 |           0.293667 |               0.302333 |


### Table 3.2

| feature                   | description                            |
|:--------------------------|:---------------------------------------|
| depth                     | Maximum folder depth of the project    |
| hasLargeImage             | Images exceeding 200 kB present        |
| causesLayoutShift         | Elements that shift layout on load     |
| slowClickHandler          | Event handlers with heavy logic        |
| deepComponentTree         | Overall component nesting depth        |
| bulkDOMNodes              | Large number of DOM nodes rendered     |
| slowNetwork               | Flag for simulated network slowdown    |
| expensiveEffects          | useEffect hooks with expensive code    |
| largeJsonState            | Stores large JSON objects in state     |
| layout_row                | Row based layout usage                 |
| pattern_inline-functions  | Inline functions in JSX                |
| pattern_lazy-loading      | Dynamic import / React.lazy usage      |
| pattern_missing-useMemo   | Heavy calculations missing memoization |
| pattern_misused-useEffect | Effects without dependency arrays      |
| pattern_prop-drilling     | Deep prop passing chains               |
| pattern_repeated-fetching | Multiple identical fetches             |
| pattern_stale-closures    | Callbacks capturing stale state        |
| pattern_too-many-effects  | Too many useEffect hooks               |
| pattern_unstable-props    | Props recreated every render           |


### Table 3.3

| baseline          | definition                                        |
|:------------------|:--------------------------------------------------|
| random            | Uniform random predictions                        |
| static_thresholds | Threshold on depth, bulk DOM nodes and image size |
| eslint_heuristics | Counts of common performance flags                |


### Table 3.4

| model               | param             | values            |
|:--------------------|:------------------|:------------------|
| random_forest       | n_estimators      | [100, 200]        |
| random_forest       | max_depth         | [None, 5, 10]     |
| random_forest       | min_samples_split | [2, 5]            |
| gradient_boosting   | n_estimators      | [100, 200]        |
| gradient_boosting   | learning_rate     | [0.05, 0.1]       |
| gradient_boosting   | max_depth         | [3, 5]            |
| logistic_regression | C                 | [0.1, 1.0, 10.0]  |
| svm                 | C                 | [0.1, 1, 10]      |
| svm                 | kernel            | ['linear', 'rbf'] |
| xgboost             | n_estimators      | [100, 200]        |
| xgboost             | learning_rate     | [0.05, 0.1]       |
| xgboost             | max_depth         | [3, 5]            |
| lightgbm            | n_estimators      | [100, 200]        |
| lightgbm            | learning_rate     | [0.05, 0.1]       |
| lightgbm            | num_leaves        | [31, 63]          |

