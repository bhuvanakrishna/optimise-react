const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { URL } = require('url');

const pages = require('../src/config/testPages.json');
const metricsDir = path.join(__dirname, '..', 'metrics');
if (!fs.existsSync(metricsDir)) fs.mkdirSync(metricsDir);

const pagesDir = path.join(__dirname, '..', 'src', 'pages', 'test-data');
const lastPage = pages[pages.length - 1].pageName;
if (!fs.existsSync(path.join(pagesDir, lastPage))) {
  console.log('⚙️  Generating test pages...');
  require('child_process').execSync('npm run generate', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
  });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--remote-debugging-port=9222'],
  });

  const endpoint = new URL(browser.wsEndpoint());
  const port = endpoint.port;

  const lighthouse = (await import('lighthouse')).default;

  const MAX_PARALLEL = 1;

  for (let i = 0; i < pages.length; i += MAX_PARALLEL) {
    const batch = pages.slice(i, i + MAX_PARALLEL);

    await Promise.allSettled(
      batch.map(async (config) => {
        const pageName = config.pageName;
        const filePath = path.join(metricsDir, `${pageName}.json`);

        // ✅ Skip if already exists
        if (fs.existsSync(filePath)) {
          console.log(`⏭️  Skipping ${pageName} (already audited)`);
          return;
        }

        const url = `http://localhost:3002/test/${pageName}`;
        console.log(`🔍 Navigating to ${pageName}...`);

        try {
          const page = await browser.newPage();

          await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 15000,
          });

          await new Promise((r) => setTimeout(r, 500));
          try {
            await page.click('button');
          } catch {}

          await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
          await page.close();

          const result = await lighthouse(url, {
            port,
            output: 'json',
            logLevel: 'error',
            disableStorageReset: true,
            onlyCategories: ['performance'],
            throttlingMethod: 'provided',
          });

          const audits = result.lhr.audits;
          const extracted = {
            pageName,
            LCP: audits['largest-contentful-paint']?.numericValue || 0,
            FID: audits['max-potential-fid']?.numericValue || 0,
            CLS: audits['cumulative-layout-shift']?.numericValue || 0,
            TBT: audits['total-blocking-time']?.numericValue || 0,
            renderTime: audits['speed-index']?.numericValue || 0,
            jsBundleSizeKB: (audits['total-byte-weight']?.numericValue || 0) / 1024,
            hasJank: audits['mainthread-work-breakdown']?.numericValue > 1000,
            imageLoadTime: audits['uses-optimized-images']?.numericValue || 0,
          };

          fs.writeFileSync(filePath, JSON.stringify(extracted, null, 2));
          console.log(`✅ Saved metrics for ${pageName}`);
        } catch (e) {
          console.error(`❌ Failed to audit ${pageName}: ${e.message}`);
        }
      })
    );
  }

  await browser.close();
})();
