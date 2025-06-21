const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { URL } = require('url');

const pages = require('../src/config/testPages.json');
const metricsDir = path.join(__dirname, '..', 'metrics');
if (!fs.existsSync(metricsDir)) fs.mkdirSync(metricsDir);

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--remote-debugging-port=9222'],
  });

  const endpoint = new URL(browser.wsEndpoint());
  const port = endpoint.port;

  for (const config of pages) {
    const pageName = config.pageName;
    const url = `http://localhost:3000/pages/test-data/${pageName}/`;

    console.log(`🔍 Navigating to ${pageName}...`);

    try {
      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      });

      // Simulate user wait and possible input
      await new Promise((r) => setTimeout(r, 500));
      try {
        await page.click('button');
      } catch {}

      await page.close(); // Optional, to avoid memory bloat

      const lighthouse = (await import('lighthouse')).default;

      const result = await lighthouse(url, {
        port,
        output: 'json',
        logLevel: 'error',
        disableStorageReset: true,
        onlyCategories: ['performance'],
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

      const filePath = path.join(metricsDir, `${pageName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(extracted, null, 2));
      console.log(`✅ Saved metrics for ${pageName}`);
    } catch (e) {
      console.error(`❌ Failed to audit ${pageName}: ${e.message}`);
    }
  }

  await browser.close();
})();
