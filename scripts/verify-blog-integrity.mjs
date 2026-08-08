import { readFile, readdir } from 'node:fs/promises';

const legacyPostNames = [
  '2025-06-03-we-have-a-blog.md',
  '2025-06-10-SRE-tools.md',
  '2025-06-17-GTNY-rundeck.md',
  '2025-06-24-GTNY-newrelic.md',
  '2025-07-01-GTNY-pagerduty.md',
  '2025-07-08-GTNY-git.md',
  '2025-07-13-GTNY-terraform.md',
  '2025-07-20-GTNY-github-actions.md',
  '2026-02-25-GTNY-cursor.md',
];

const sourceFiles = (await readdir('_posts')).filter((name) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(name));
const migratedFiles = (await readdir('src/content/blog')).filter((name) => name.endsWith('.md'));

if (sourceFiles.length !== legacyPostNames.length) {
  throw new Error(`Expected ${legacyPostNames.length} legacy source posts, found ${sourceFiles.length}: ${sourceFiles.join(', ')}`);
}

for (const name of legacyPostNames) {
  if (!sourceFiles.includes(name)) throw new Error(`Missing preserved legacy source post: ${name}`);
  if (!migratedFiles.includes(name)) throw new Error(`Missing Astro blog post for legacy route: ${name}`);

  const legacy = (await readFile(`_posts/${name}`, 'utf8')).replace(/\r\n/g, '\n');
  const current = (await readFile(`src/content/blog/${name}`, 'utf8')).replace(/\r\n/g, '\n');

  const legacyDate = legacy.match(/^date:\s*(.+)$/m)?.[1]?.trim();
  const currentDate = current.match(/^date:\s*(.+)$/m)?.[1]?.trim();
  const legacyTitle = legacy.match(/^title:\s*(.+)$/m)?.[1]?.trim();
  const currentTitle = current.match(/^title:\s*(.+)$/m)?.[1]?.trim();

  if (!legacyDate || currentDate !== legacyDate) {
    throw new Error(`Original publication date drift detected for ${name}`);
  }

  if (!legacyTitle || currentTitle !== legacyTitle) {
    throw new Error(`Legacy article title drift detected for ${name}`);
  }
}

if (migratedFiles.length < legacyPostNames.length) {
  throw new Error(`Expected at least ${legacyPostNames.length} Astro blog posts, found ${migratedFiles.length}`);
}

console.log(`Verified ${legacyPostNames.length} legacy article identities and publication dates are preserved; editorial revisions and new posts are allowed.`);
