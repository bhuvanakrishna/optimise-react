import argparse
import json
import subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent
NODE_SCRIPT = HERE.parent / 'synthetic-react-app' / 'scripts' / 'perf_puppeteer.js'


def measure(tsx_path: Path, out_json: Path) -> dict:
    cmd = ['node', str(NODE_SCRIPT), str(tsx_path), str(out_json)]
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        with open(out_json) as f:
            return json.load(f)
    except Exception as e:
        print(f'Failed to run {cmd}: {e}')
        return {}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('original', help='Path to original TSX file')
    parser.add_argument('updated', help='Path to updated TSX file')
    args = parser.parse_args()
    orig_metrics = measure(Path(args.original), Path('orig_metrics.json'))
    upd_metrics = measure(Path(args.updated), Path('upd_metrics.json'))
    print('Original metrics:', orig_metrics)
    print('Updated metrics:', upd_metrics)

    if orig_metrics and upd_metrics:
        delta = upd_metrics.get('loadTimeMs', 0) - orig_metrics.get('loadTimeMs', 0)
        print('Delta loadTimeMs:', delta)

if __name__ == '__main__':
    main()
