import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'public');
const assetRoot = path.join(publicRoot, 'assets');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const sourceFiles = (await walk(sourceRoot)).filter((file) => /\.(astro|md|mdx|ts|js|css)$/i.test(file));
const referenced = new Set();
const referencePattern = /(?:https?:\/\/contactgilmore\.github\.io)?(\/assets\/[A-Za-z0-9_.,()' +%\-/]+?\.(?:png|jpe?g|gif|webp|svg|ico|zip))/gi;

for (const file of sourceFiles) {
  const text = await readFile(file, 'utf8');
  for (const match of text.matchAll(referencePattern)) {
    const pathname = decodeURIComponent(match[1]);
    referenced.add(pathname.replace(/^\//, ''));
  }
}

const publicFiles = (await walk(assetRoot)).map((file) => path.relative(publicRoot, file).split(path.sep).join('/'));
const publicSet = new Set(publicFiles);
const missing = [...referenced].filter((file) => !publicSet.has(file)).sort();
const unused = publicFiles.filter((file) => !referenced.has(file)).sort();
const archives = publicFiles.filter((file) => /\.zip$/i.test(file)).sort();

console.log(`Public asset audit: ${referenced.size} referenced, ${publicFiles.length} present, ${unused.length} unreferenced.`);

if (missing.length) {
  console.error('\nReferenced assets missing from public/:');
  for (const file of missing) console.error(`  - ${file}`);
}

if (unused.length) {
  console.error('\nUnreferenced public assets are not allowed:');
  for (const file of unused) console.error(`  - ${file}`);
}

if (archives.length) {
  console.error('\nArchive files are not allowed in public/assets without an explicit source reference:');
  for (const file of archives) console.error(`  - ${file}`);
}

if (missing.length || unused.length || archives.length) {
  process.exitCode = 1;
} else {
  console.log('\nAll source-referenced assets exist and no orphan public assets remain.');
}
