import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/work/' },
  { name: 'implementation-case', path: '/work/implementation-delivery/' },
  { name: 'reliability-case', path: '/work/reliability-remediation/' },
  { name: 'operating-model-case', path: '/work/operating-model/' },
  { name: 'writing', path: '/blog/' },
  { name: 'about', path: '/about/' },
  { name: 'resume', path: '/resume/' },
  { name: 'series-overview', path: '/SRE-tools/' },
  { name: 'rundeck-article', path: '/GTNY-rundeck/' },
  { name: 'newrelic-article', path: '/GTNY-newrelic/' },
  { name: 'pagerduty-article', path: '/GTNY-pagerduty/' },
  { name: 'git-article', path: '/GTNY-git/' },
  { name: 'terraform-article', path: '/GTNY-terraform/' },
  { name: 'actions-article', path: '/GTNY-github-actions/' },
  { name: 'cursor-article', path: '/GTNY-cursor/' },
  { name: 'kubernetes-article', path: '/gtny-kubernetes/' },
  { name: 'opentelemetry-article', path: '/gtny-opentelemetry/' },
  { name: 'argocd-gitops-article', path: '/gtny-argocd-gitops/' },
  { name: 'retired-launch-note', path: '/we-have-a-blog/' },
];

for (const target of pages) {
  test(`${target.name} renders cleanly`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    const response = await page.goto(target.path, { waitUntil: 'networkidle' });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('main')).toBeVisible();

    const viewport = page.viewportSize();
    if (viewport) {
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(viewport.width);
    }

    expect(consoleErrors).toEqual([]);
  });
}

test('primary navigation and skip link work', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByRole('link', { name: 'Work', exact: true })).toHaveAttribute('href', '/work/');
  await expect(page.getByRole('link', { name: 'Writing', exact: true })).toHaveAttribute('href', '/blog/');
  await expect(page.getByRole('link', { name: 'About', exact: true })).toHaveAttribute('href', '/about/');
  await expect(page.getByRole('link', { name: 'Resume', exact: true })).toHaveAttribute('href', '/resume/');

  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).toHaveAttribute('href', '#main-content');
  await expect(page.locator('#main-content')).toHaveCount(1);
});

test('updated article metadata and series navigation are coherent', async ({ page }) => {
  await page.goto('/GTNY-terraform/', { waitUntil: 'networkidle' });
  await expect(page.locator('.post-date')).toContainText('Published July 13, 2025');
  await expect(page.locator('.post-date')).toContainText('Updated August 8, 2026');

  const seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Previous.*Git/i })).toHaveAttribute('href', '/GTNY-git/');
  await expect(seriesNav.getByRole('link', { name: /Next.*GitHub Actions/i })).toHaveAttribute('href', '/GTNY-github-actions/');
});

test('series continuation reaches Kubernetes', async ({ page }) => {
  await page.goto('/GTNY-cursor/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Git to Know You: Cursor');

  let seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Next.*Kubernetes/i })).toHaveAttribute('href', '/gtny-kubernetes/');

  await page.goto('/gtny-kubernetes/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Git to Know You: Kubernetes');
  await expect(page.locator('.post-date')).toContainText('Published August 8, 2026');

  seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Previous.*Cursor/i })).toHaveAttribute('href', '/GTNY-cursor/');
  await expect(seriesNav.getByRole('link', { name: /Next.*OpenTelemetry/i })).toHaveAttribute('href', '/gtny-opentelemetry/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /kubernetes-icon-color\.svg$/);
  await expect(page.locator('.blog-thumbnail')).toHaveCSS('object-fit', 'contain');

  await page.goto('/blog/', { waitUntil: 'networkidle' });
  const archiveRow = page.locator('.writing-row').filter({
    has: page.getByRole('link', { name: '#8. Git to Know You: Kubernetes' }),
  });
  await expect(archiveRow.locator('.writing-row__date')).toContainText('Aug 8, 2026');
});

test('series continuation reaches OpenTelemetry', async ({ page }) => {
  await page.goto('/gtny-kubernetes/', { waitUntil: 'networkidle' });

  let seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Next.*OpenTelemetry/i })).toHaveAttribute('href', '/gtny-opentelemetry/');

  await page.goto('/gtny-opentelemetry/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Git to Know You: OpenTelemetry');
  await expect(page.locator('.post-date')).toContainText('Published August 8, 2026');

  seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Previous.*Kubernetes/i })).toHaveAttribute('href', '/gtny-kubernetes/');
  await expect(seriesNav.getByRole('link', { name: /Next.*Argo CD/i })).toHaveAttribute('href', '/gtny-argocd-gitops/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /open-telemetry\.svg$/);
  await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', '/assets/images/blog2026/082026/open-telemetry.svg');
  await expect(page.locator('.blog-thumbnail')).toHaveCSS('object-fit', 'contain');

  await page.goto('/blog/', { waitUntil: 'networkidle' });
  const archiveRow = page.locator('.writing-row').filter({
    has: page.getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' }),
  });
  await expect(archiveRow.locator('.writing-row__date')).toContainText('Aug 8, 2026');
  await expect(archiveRow.getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' })).toHaveAttribute('href', '/gtny-opentelemetry/');
});

test('series continuation reaches Argo CD and GitOps', async ({ page }) => {
  await page.goto('/gtny-opentelemetry/', { waitUntil: 'networkidle' });

  let seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Next.*Argo CD/i })).toHaveAttribute('href', '/gtny-argocd-gitops/');

  await page.goto('/gtny-argocd-gitops/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Git to Know You: Argo CD and GitOps');
  await expect(page.locator('.post-date')).toContainText('Published August 8, 2026');

  seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Previous.*OpenTelemetry/i })).toHaveAttribute('href', '/gtny-opentelemetry/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /argo-cd-logo\.svg$/);
  await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', '/assets/images/blog2026/082026/argo-cd-logo.svg');
  await expect(page.locator('.blog-thumbnail')).toHaveCSS('object-fit', 'contain');
});

test('retired launch note points readers to current Writing', async ({ page }) => {
  await page.goto('/we-have-a-blog/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Writing has moved');
  await expect(page.getByRole('link', { name: 'Browse current writing' })).toHaveAttribute('href', '/blog/');
});

test('structured data stays public-safe and article metadata is complete', async ({ page }) => {
  await page.goto('/GTNY-terraform/', { waitUntil: 'networkidle' });

  const articleJson = page.locator('script[type="application/ld+json"]').last();
  const payload = JSON.parse(await articleJson.textContent() || '{}');
  expect(payload['@type']).toBe('BlogPosting');
  expect(payload.headline).toContain('Git to Know You: Terraform');
  expect(payload.datePublished).toBeTruthy();
  expect(payload.dateModified).toBeTruthy();

  const body = await page.locator('body').innerText();
  expect(body).not.toMatch(/\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/);
});

for (const path of ['/', '/work/', '/blog/', '/SRE-tools/', '/GTNY-terraform/', '/GTNY-cursor/', '/gtny-kubernetes/', '/gtny-opentelemetry/', '/gtny-argocd-gitops/']) {
  test(`axe accessibility scan passes for ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
