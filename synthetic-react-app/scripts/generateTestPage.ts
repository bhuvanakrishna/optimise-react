import fs from 'fs-extra';
import path from 'path';
import ejs from 'ejs';

const baseDir = path.resolve(__dirname, '..'); // one level above /scripts
const pagesConfig = require(path.join(baseDir, 'src/config/testPages.json'));
const templatesDir = path.join(baseDir, 'src/templates');
const outputBase = path.join(baseDir, 'src/pages/test-data');


const renderAndWrite = async (templateFile: string, outputPath: string, data: any) => {
  const template = await fs.readFile(templateFile, 'utf8');
  const content = ejs.render(template, data);
  await fs.outputFile(outputPath, content);
};

const generateComponentChain = async (
  depth: number,
  pattern: string,
  pageDir: string,
  components: string[]
) => {
  for (let i = 1; i <= depth; i++) {
    const name = i === 1 ? 'Parent' : i === depth ? 'Child' : `Level${i}`;
    const nextName = i < depth ? (i + 1 === depth ? 'Child' : `Level${i + 1}`) : '';
    const uiComponent = components[i - 1] || components[(i - 1) % components.length];
    const file = path.join(pageDir, `${name}.tsx`);
    await renderAndWrite(
      path.join(templatesDir, 'Component.ejs'),
      file,
      { name, nextName, pattern, uiComponent }
    );
  }
};

(async () => {
  for (const config of pagesConfig) {
    const pageDir = path.join(outputBase, config.pageName);
    await fs.ensureDir(pageDir);

    // Generate index.tsx (page entry)
    await renderAndWrite(
      path.join(templatesDir, 'Page.ejs'),
      path.join(pageDir, 'index.tsx'),
      { pageName: config.pageName, layout: config.layout, pattern: config.pattern }
    );

    // Generate component chain
    await generateComponentChain(
      config.depth,
      config.pattern,
      pageDir,
      config.components || []
    );
  }

  const indexData = pagesConfig.map((p: any) => ({ name: p.pageName, pattern: p.pattern, depth: p.depth }));
  const indexContent = `// src/test-data/index.ts\nexport const testPages = ${JSON.stringify(indexData, null, 2)};\n`;
  await fs.outputFile(path.join(outputBase, 'index.ts'), indexContent);

  console.log('✅ Test data pages generated successfully!');
})();
