import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const postNames = [
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

if (sourceFiles.length !== postNames.length) {
  throw new Error(`Expected ${postNames.length} published source posts, found ${sourceFiles.length}: ${sourceFiles.join(', ')}`);
}

if (migratedFiles.length !== postNames.length) {
  throw new Error(`Expected ${postNames.length} migrated posts, found ${migratedFiles.length}: ${migratedFiles.join(', ')}`);
}

for (const name of postNames) {
  const source = await readFile(`_posts/${name}`);
  const migrated = await readFile(`src/content/blog/${name}`);
  const sourceHash = createHash('sha256').update(source).digest('hex');
  const migratedHash = createHash('sha256').update(migrated).digest('hex');

  if (sourceHash !== migratedHash) {
    throw new Error(`Content drift detected for ${name}`);
  }
}

console.log(`Verified ${postNames.length} migrated blog posts are byte-for-byte identical to Jekyll sources.`);
