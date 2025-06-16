const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const componentsDir = path.join(baseDir, 'src', 'components');
const components = fs.readdirSync(componentsDir).map(f => path.parse(f).name);

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const patterns = [
  'prop-drilling',
  'unstable-props',
  'too-many-effects',
  'missing-useMemo',
  'lazy-loading',
  'inline-handler',
  'no-deps-effect',
  'react-memo',
  'anonymous-jsx',
  'props-change-without-need',
  'state-lifted-too-high',
  'global-context-abuse',
  'non-memoized-selector',
  'no-cleanup-effect',
  'derived-state-in-effect',
  'large-list-no-key',
  'map-no-key',
  'layout-thrashing',
  'unbatched-updates',
  'large-dom-rerenders',
  'expensive-render',
  'controlled-no-callback',
  'debounced-onchange-no-callback',
  'map-state-to-props',
  'heavy-slice-multi-connect',
  'new-props-each-render',
  'non-memo-render-item',
  'inline-object',
  'usememo-misuse',
  'log-in-render',
  'loop-log-effect'
];

const pagesPerPattern = 5;

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pages = [];
patterns.forEach(pattern => {
  for (let i = 1; i <= pagesPerPattern; i++) {
    pages.push({
      pageName: `${pattern.replace(/-/g, '')}Test${i}`,
      layout: Math.random() > 0.5 ? 'row' : 'column',
      depth: randInt(2, 6),
      pattern,
      components: shuffle([...components]).slice(0, randInt(3, 7))
    });
  }
});

fs.writeFileSync(path.join(baseDir, 'src', 'config', 'testPages.json'), JSON.stringify(pages, null, 2));
console.log('testPages.json generated with', pages.length, 'pages');
