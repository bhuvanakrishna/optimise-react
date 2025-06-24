import os
import json
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
        print(f'⚠️ Skipping {page_name} — no runtime metrics found.')
        continue

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

# Create DataFrame
df = pd.DataFrame(rows)

# Improved composite label logic
def label_performance(row):
    return "slow" if (
        row.get("LCP", 0) > 4000 or
        row.get("TBT", 0) > 1000 or
        row.get("FID", 0) > 500 or
        row.get("CLS", 0) > 0.25 or
        row.get("renderTime", 0) > 3000 or
        row.get("imageLoadTime", 0) > 3000 or
        row.get("hasJank", False)
    ) else "fast"

df["label"] = df.apply(label_performance, axis=1)

# Save
df.to_csv(output_csv, index=False)
print(f"✅ Dataset written to {output_csv} with {len(df)} rows.")
