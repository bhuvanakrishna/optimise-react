import os
import json
import random
import pandas as pd

# Paths
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
config_path = os.path.join(base_dir, 'synthetic-react-app', 'src', 'config', 'testPages.json')
metrics_dir = os.path.join(base_dir, 'synthetic-react-app', 'metrics')
output_csv = os.path.join(base_dir, 'ml', 'dataset.csv')

# Load static page configs
with open(config_path) as f:
    test_pages = json.load(f)

rows = []

for page in test_pages:
    page_name = page['pageName']
    metrics_file = os.path.join(metrics_dir, f'{page_name}.json')
    
    if not os.path.exists(metrics_file):
        print(f'ℹ️ Generating synthetic metrics for {page_name}')
        runtime_metrics = {
            'LCP': random.uniform(1000, 10000),
            'FID': random.uniform(50, 6000),
            'CLS': random.uniform(0, 0.3),
            'TBT': random.uniform(0, 12000),
            'renderTime': random.uniform(500, 8000),
            'jsBundleSizeKB': random.uniform(5, 6000),
            'hasJank': random.choice([True, False]),
            'imageLoadTime': random.uniform(0, 2000),
        }
    else:
        with open(metrics_file) as f:
            runtime_metrics = json.load(f)
    
    # Merge static + dynamic
    merged = {
        'pageName': page_name,
        'pattern': page['pattern'],
        'depth': page['depth'],
        'layout': page['layout'],
        'hasLargeImage': page['webVitalsFlags'].get('hasLargeImage', False),
        'causesLayoutShift': page['webVitalsFlags'].get('causesLayoutShift', False),
        'slowClickHandler': page['webVitalsFlags'].get('slowClickHandler', False),
        'deepComponentTree': page['realismFlags'].get('deepComponentTree', False),
        'bulkDOMNodes': page['realismFlags'].get('bulkDOMNodes', False),
        'slowNetwork': page['realismFlags'].get('slowNetwork', False),
        'expensiveEffects': page['realismFlags'].get('expensiveEffects', False),
        'largeJsonState': page['realismFlags'].get('largeJsonState', False),
        **runtime_metrics  # dynamic fields like LCP, FID, TBT, etc.
    }

    rows.append(merged)

# Write to CSV
df = pd.DataFrame(rows)

def label_performance(row):
    if row["LCP"] > 4000 or row["TBT"] > 1000 or row["FID"] > 500:
        return "slow"
    return "fast"

df["label"] = df.apply(label_performance, axis=1)

df.to_csv(output_csv, index=False)
print(f"✅ Dataset written to {output_csv} with {len(df)} rows.")
