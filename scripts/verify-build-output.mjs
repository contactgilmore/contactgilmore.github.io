import { access } from 'node:fs/promises';
import path from 'node:path';

const requiredOutputs = [
  'index.html',
  'blog/index.html',
  'we-have-a-blog/index.html',
  'SRE-tools/index.html',
  'GTNY-rundeck/index.html',
  'GTNY-newrelic/index.html',
  'GTNY-pagerduty/index.html',
  'GTNY-git/index.html',
  'GTNY-terraform/index.html',
  'GTNY-github-actions/index.html',
  'GTNY-cursor/index.html',
  'assets/images/blog2025/vaultBoy.png',
  'assets/images/blog2025/0622/sre_logos_thumbnail.png',
  'assets/images/blog2026/022026/cursorlogo2.png',
];

for (const relativePath of requiredOutputs) {
  const outputPath = path.join('dist', relativePath);
  try {
    await access(outputPath);
  } catch {
    throw new Error(`Missing required build output: ${outputPath}`);
  }
}

console.log(`Verified ${requiredOutputs.length} required routes/assets in Astro build output.`);
