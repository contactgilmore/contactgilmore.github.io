import { access, readFile, readdir } from 'node:fs/promises';

const activeLegacyPostNames = [
  '2025-06-10-SRE-tools.md',
  '2025-06-17-GTNY-rundeck.md',
  '2025-06-24-GTNY-newrelic.md',
  '2025-07-01-GTNY-pagerduty.md',
  '2025-07-08-GTNY-git.md',
  '2025-07-13-GTNY-terraform.md',
  '2025-07-20-GTNY-github-actions.md',
  '2026-02-25-GTNY-cursor.md',
];

const retiredLegacyPosts = [
  {
    source: '2025-06-03-we-have-a-blog.md',
    compatibilityPage: 'src/pages/we-have-a-blog.astro',
  },
];

const sourceFiles = (await readdir('_posts')).filter((name) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(name));
const currentFiles = (await readdir('src/content/blog')).filter((name) => name.endsWith('.md'));

for (const name of activeLegacyPostNames) {
  if (!sourceFiles.includes(name)) throw new Error(`Missing preserved legacy source post: ${name}`);
  if (!currentFiles.includes(name)) throw new Error(`Missing active Astro blog post for legacy route: ${name}`);

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

for (const { source, compatibilityPage } of retiredLegacyPosts) {
  if (!sourceFiles.includes(source)) throw new Error(`Missing historical source record for retired post: ${source}`);
  if (currentFiles.includes(source)) throw new Error(`Retired post is still present in the active Astro article collection: ${source}`);
  await access(compatibilityPage);
}

console.log(
  `Verified ${activeLegacyPostNames.length} active legacy article identities/publication dates and ${retiredLegacyPosts.length} retired compatibility route.`
);
