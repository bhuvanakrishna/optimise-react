import json
from pathlib import Path
import csv

CONFIG = Path(__file__).resolve().parents[1] / 'synthetic-react-app' / 'src' / 'config' / 'testPages.json'
OUTPUT = Path(__file__).with_name('dataset.csv')

def main() -> None:
    with CONFIG.open() as f:
        pages = json.load(f)

    records = []
    for p in pages:
        records.append({
            'name': p['pageName'],
            'pattern': p['pattern'],
            'depth': p['depth'],
            'layout': p['layout'],
            'num_components': len(p.get('components', []))
        })

    with OUTPUT.open('w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=records[0].keys())
        writer.writeheader()
        writer.writerows(records)
    print(f"Dataset written to {OUTPUT}")

if __name__ == '__main__':
    main()
