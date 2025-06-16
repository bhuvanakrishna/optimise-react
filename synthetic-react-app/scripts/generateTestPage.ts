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

const generateComponentChain = async (depth: number, pageDir: string) => {
  for (let i = depth; i >= 1; i--) {
    const name = i === depth ? "Child" : i === 1 ? "Parent" : `Level${i}`;
    const file = path.join(pageDir, `${name}.tsx`);
    await renderAndWrite(
      path.join(templatesDir, 'Component.ejs'),
      file,
      { name, depth: i }
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
      { pageName: config.pageName, layout: config.layout }
    );

    // Generate component chain
    await generateComponentChain(config.depth, pageDir);
  }

  console.log('✅ Test data pages generated successfully!');
})();
