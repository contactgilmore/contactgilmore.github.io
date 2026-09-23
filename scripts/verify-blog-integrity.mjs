import { access, readFile, readdir } from 'node:fs/promises';

const preservedArticles = new Map([
  ['2025-06-10-SRE-tools.md', '2025-06-10'],
  ['2025-06-17-GTNY-rundeck.md', '2025-06-17'],
  ['2025-06-24-GTNY-newrelic.md', '2025-06-24'],
  ['2025-07-01-GTNY-pagerduty.md', '2025-07-01'],
  ['2025-07-08-GTNY-git.md', '2025-07-08'],
  ['2025-07-13-GTNY-terraform.md', '2025-07-13'],
  ['2025-07-20-GTNY-github-actions.md', '2025-07-20'],
  ['2026-02-25-GTNY-cursor.md', '2026-02-25'],
]);

const currentFiles = (await readdir('src/content/blog')).filter((name) => name.endsWith('.md'));
for (const [name, expectedDate] of preservedArticles) {
  if (!currentFiles.includes(name)) throw new Error(`Missing canonical Astro article: ${name}`);
  const current = (await readFile(`src/content/blog/${name}`, 'utf8')).replace(/\r\n/g, '\n');
  const date = current.match(/^date:\s*(.+)$/m)?.[1]?.trim();
  const title = current.match(/^title:\s*(.+)$/m)?.[1]?.trim();
  if (!date?.includes(expectedDate)) throw new Error(`Original publication date drift detected for ${name}`);
  if (!title) throw new Error(`Missing article title for ${name}`);
}

await access('src/pages/we-have-a-blog.astro');
console.log(`Verified ${preservedArticles.size} canonical Astro article identities/publication dates and the retired-post compatibility route.`);
