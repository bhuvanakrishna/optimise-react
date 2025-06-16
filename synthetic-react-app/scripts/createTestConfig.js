const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const componentsDir = path.join(baseDir, 'src', 'components');
const outputPath = path.join(baseDir, 'src', 'config', 'testPages.json');

// Load available component names
const components = fs.readdirSync(componentsDir)
  .filter(f => f.endsWith('.tsx') && !f.startsWith('.DS_Store'))
  .map(f => path.parse(f).name);


// Shuffle utility
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Define patterns and unique flags for better synthetic diversity
const patterns = {
  'prop-drilling': { deepProps: true },
  'unstable-props': { frequentRerenders: true },
  'too-many-effects': { effectFlood: true },
  'missing-useMemo': { recomputesHeavyFn: true },
  'lazy-loading': { breakIntoChunks: true },
  'inefficient-context': { globalContext: true },
  'stale-closures': { staleState: true },
  'misused-useEffect': { wrongDeps: true },
  'inline-functions': { inlineInJSX: true },
  'repeated-fetching': { repeatedCalls: true }
};

// Create page configurations
const pages = [];
for (const [pattern, flags] of Object.entries(patterns)) {
  for (let i = 1; i <= 30; i++) {
    pages.push({
      pageName: `${pattern.replace(/-/g, '')}Test${i}`,
      layout: i % 2 === 0 ? 'row' : 'column',
      depth: 2 + (i % 4),
      pattern,
      patternFlags: flags,
      webVitalsFlags: {
        hasLargeImage: Math.random() < 0.33,
  causesLayoutShift: Math.random() < 0.25,
  slowClickHandler: Math.random() < 0.2
      },
      components: shuffle([...components]).slice(0, 5),
      realismFlags: {
        deepComponentTree: Math.random() < 0.4,
        bulkDOMNodes: Math.random() < 0.3,
        slowNetwork: Math.random() < 0.3,
        expensiveEffects: Math.random() < 0.3,
        fakeImageAssets: Math.random() < 0.5
      }
    });
    
  }
}

// Write the file
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));
console.log('✅ testPages.json generated with', pages.length, 'pages');

