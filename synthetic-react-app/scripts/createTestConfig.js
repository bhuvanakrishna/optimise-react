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
  'lazy-loading'
];

const pages = [];
patterns.forEach(pattern => {
  for (let i = 1; i <= 30; i++) {
    pages.push({
      pageName: `${pattern.replace(/-/g, '')}Test${i}`,
      layout: i % 2 === 0 ? 'row' : 'column',
      depth: 2 + (i % 5),
      pattern,
      components: shuffle([...components]).slice(0, 5)
    });
  }
});

fs.writeFileSync(path.join(baseDir, 'src', 'config', 'testPages.json'), JSON.stringify(pages, null, 2));
console.log('testPages.json generated with', pages.length, 'pages');
