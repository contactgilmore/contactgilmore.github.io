import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const distRoot = path.resolve('dist');

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

function targetForPathname(pathname) {
  const decoded = decodeURIComponent(pathname);
  if (decoded === '/') return path.join(distRoot, 'index.html');
  const relative = decoded.replace(/^\//, '');
  if (path.extname(relative)) return path.join(distRoot, relative);
  return path.join(distRoot, relative, 'index.html');
}

const htmlFiles = (await walk(distRoot)).filter((file) => file.endsWith('.html'));
const failures = [];
let checked = 0;

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);

  for (const href of hrefs) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;

    let url;
    try {
      url = new URL(href, 'https://contactgilmore.github.io');
    } catch {
      failures.push(`${path.relative(distRoot, htmlFile)} -> invalid href: ${href}`);
      continue;
    }

    if (url.origin !== 'https://contactgilmore.github.io') continue;

    checked += 1;
    const target = targetForPathname(url.pathname);
    try {
      await access(target);
    } catch {
      failures.push(`${path.relative(distRoot, htmlFile)} -> ${href} (missing ${path.relative(distRoot, target)})`);
    }
  }
}

if (failures.length) {
  console.error(`Internal link validation failed with ${failures.length} broken target(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Verified ${checked} internal links across ${htmlFiles.length} generated HTML pages.`);
}
