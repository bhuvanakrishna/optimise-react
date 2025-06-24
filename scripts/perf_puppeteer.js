const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const input = process.argv[2];
  const outFile = process.argv[3];
  if (!input || !outFile) {
    console.error('Usage: node perf_puppeteer.js <js_file> <out_json>');
    process.exit(1);
  }

  const code = fs.readFileSync(input, 'utf8');
  const tmpHtml = path.join(path.dirname(outFile),
    path.basename(input).replace(/\.[^.]+$/, '') + '.html');

  const html = `<!doctype html>
<html><head>
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head><body>
<div id="root"></div>
<script type="text/babel">
${code}
if (typeof App === 'function') {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
}
</script>
</body></html>`;
  fs.writeFileSync(tmpHtml, html, 'utf8');

  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(tmpHtml), {waitUntil: 'load'});
  await page.waitForTimeout(1000);
  const loadTime = await page.evaluate(() => performance.timing.loadEventEnd - performance.timing.navigationStart);
  await browser.close();

  fs.writeFileSync(outFile, JSON.stringify({loadTimeMs: loadTime}, null, 2));
})();
