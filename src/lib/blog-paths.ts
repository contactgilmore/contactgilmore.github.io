const legacyBlogPaths: Record<string, string> = {
  '2025-06-03-we-have-a-blog': '/we-have-a-blog/',
  '2025-06-10-sre-tools': '/SRE-tools/',
  '2025-06-17-gtny-rundeck': '/GTNY-rundeck/',
  '2025-06-24-gtny-newrelic': '/GTNY-newrelic/',
  '2025-07-01-gtny-pagerduty': '/GTNY-pagerduty/',
  '2025-07-08-gtny-git': '/GTNY-git/',
  '2025-07-13-gtny-terraform': '/GTNY-terraform/',
  '2025-07-20-gtny-github-actions': '/GTNY-github-actions/',
  '2026-02-25-gtny-cursor': '/GTNY-cursor/',
};

export function getBlogPath(id: string, slug?: string): string {
  const legacyPath = legacyBlogPaths[id];
  if (legacyPath) return legacyPath;

  if (slug) return `/${slug}/`;

  throw new Error(`Blog entry ${id} needs an explicit slug because it has no legacy path mapping.`);
}

export { legacyBlogPaths };
