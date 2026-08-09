import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home' },
  { path: '/work/', name: 'work' },
  { path: '/work/implementation-delivery/', name: 'implementation-case' },
  { path: '/work/reliability-remediation/', name: 'reliability-case' },
  { path: '/work/operating-model/', name: 'operating-model-case' },
  { path: '/blog/', name: 'writing' },
  { path: '/about/', name: 'about' },
  { path: '/resume/', name: 'resume' },
  { path: '/SRE-tools/', name: 'series-overview' },
  { path: '/GTNY-rundeck/', name: 'rundeck-article' },
  { path: '/GTNY-newrelic/', name: 'newrelic-article' },
  { path: '/GTNY-pagerduty/', name: 'pagerduty-article' },
  { path: '/GTNY-git/', name: 'git-article' },
  { path: '/GTNY-terraform/', name: 'terraform-article' },
  { path: '/GTNY-github-actions/', name: 'actions-article' },
  { path: '/GTNY-cursor/', name: 'cursor-article' },
  { path: '/gtny-kubernetes/', name: 'kubernetes-article' },
  { path: '/gtny-opentelemetry/', name: 'opentelemetry-article' },
  { path: '/gtny-argocd-gitops/', name: 'argocd-gitops-article' },
  { path: '/we-have-a-blog/', name: 'retired-launch-note' },
];

for (const pageTarget of pages) {
  test(`${pageTarget.name} renders cleanly`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => consoleErrors.push(error.message));

    const response = await page.goto(pageTarget.path, { waitUntil: 'networkidle' });
    expect(response?.ok(), `${pageTarget.path} should return a successful response`).toBeTruthy();

    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://contactgilmore.github.io${pageTarget.path}`);
    await expect(page.locator('link[rel="sitemap"]')).toHaveAttribute('href', '/sitemap-index.xml');
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);

    const overflow = await page.evaluate(() => {
      const clientWidth = document.documentElement.clientWidth;
      const elements = [...document.querySelectorAll<HTMLElement>('body *')];
      const positionedOffenders = elements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName.toLowerCase(),
            className: typeof element.className === 'string' ? element.className : '',
            text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 90),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          };
        })
        .filter((item) => item.right > clientWidth + 1 || item.left < -1)
        .sort((a, b) => b.right - a.right)
        .slice(0, 8);

      const internalOffenders = elements
        .filter((element) => element.scrollWidth > element.clientWidth + 1)
        .map((element) => ({
          tag: element.tagName.toLowerCase(),
          className: typeof element.className === 'string' ? element.className : '',
          text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 90),
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
          overflowX: getComputedStyle(element).overflowX,
        }))
        .sort((a, b) => (b.scrollWidth - b.clientWidth) - (a.scrollWidth - a.clientWidth))
        .slice(0, 8);

      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth,
        positionedOffenders,
        internalOffenders,
      };
    });

    expect(
      overflow.scrollWidth,
      `${pageTarget.path} should not overflow horizontally (${overflow.scrollWidth}px > ${overflow.clientWidth}px). Positioned: ${JSON.stringify(overflow.positionedOffenders)} Internal: ${JSON.stringify(overflow.internalOffenders)}`,
    ).toBeLessThanOrEqual(overflow.clientWidth + 1);

    expect(consoleErrors, `browser errors on ${pageTarget.path}`).toEqual([]);

    await page.screenshot({
      path: testInfo.outputPath(`${pageTarget.name}-full.png`),
      fullPage: true,
    });
  });
}

test('primary navigation and skip link work', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const nav = page.getByRole('navigation', { name: /primary/i });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work/');
  await expect(nav.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', '/blog/');
  await expect(nav.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about/');
  await expect(nav.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume/');

  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});

test('updated article metadata and series navigation are coherent', async ({ page }) => {
  await page.goto('/GTNY-terraform/', { waitUntil: 'networkidle' });

  await expect(page.locator('.post-date')).toContainText('Published July 13, 2025');
  await expect(page.locator('.post-date')).toContainText('Updated August 8, 2026');

  const seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav).toBeVisible();
  await expect(seriesNav.getByRole('link', { name: /Previous.*Git/i })).toHaveAttribute('href', '/GTNY-git/');
  await expect(seriesNav.getByRole('link', { name: /Next.*GitHub Actions/i })).toHaveAttribute('href', '/GTNY-github-actions/');

  const jsonLdText = await page.locator('script[type="application/ld+json"]').textContent();
  const jsonLd = JSON.parse(jsonLdText || '{}');
  expect(JSON.stringify(jsonLd)).toContain('dateModified');
});

test('series continuation reaches Kubernetes', async ({ page }) => {
  await page.goto('/GTNY-cursor/', { waitUntil: 'networkidle' });

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

  await page.goto('/', { waitUntil: 'networkidle' });
  const featuredCard = page.locator('.article-card').filter({
    has: page.getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' }),
  });
  await expect(featuredCard.locator('.article-card__date')).toContainText('Aug 8, 2026');
  await expect(featuredCard.getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' })).toHaveAttribute('href', '/gtny-opentelemetry/');
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
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /argo-icon-color\.svg$/);
  await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', '/assets/images/blog2026/082026/argo-icon-color.svg');
  await expect(page.locator('.blog-thumbnail')).toHaveCSS('object-fit', 'contain');

  await page.goto('/SRE-tools/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('link', { name: /Argo CD and GitOps/i })).toHaveAttribute('href', '/gtny-argocd-gitops/');

  await page.goto('/blog/', { waitUntil: 'networkidle' });
  const archiveRow = page.locator('.writing-row').filter({
    has: page.getByRole('link', { name: '#10. Git to Know You: Argo CD and GitOps' }),
  });
  await expect(archiveRow.locator('.writing-row__date')).toContainText('Aug 8, 2026');
  await expect(archiveRow.getByRole('link', { name: '#10. Git to Know You: Argo CD and GitOps' })).toHaveAttribute('href', '/gtny-argocd-gitops/');
});

test('retired launch note points readers to current Writing', async ({ page }) => {
  await page.goto('/we-have-a-blog/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('retired');
  await expect(page.getByRole('link', { name: /Go to Writing/i })).toHaveAttribute('href', '/blog/');
});

test('structured data stays public-safe and article metadata is complete', async ({ page }) => {
  await page.goto('/GTNY-cursor/', { waitUntil: 'networkidle' });

  const jsonLdText = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLdText).toBeTruthy();
  const jsonLd = JSON.parse(jsonLdText || '{}');
  const serialized = JSON.stringify(jsonLd);

  expect(serialized).toContain('Mike Gilmore');
  expect(serialized).toContain('BlogPosting');
  expect(serialized).toContain('https://github.com/contactgilmore');
  expect(serialized).toContain('https://www.linkedin.com/in/contactgilmore/');
  expect(serialized).not.toContain('telephone');
  expect(serialized).not.toContain('streetAddress');
  expect(serialized).not.toContain('birthDate');

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /cursorlogo2\.png$/);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
});

for (const target of ['/', '/work/', '/blog/', '/SRE-tools/', '/GTNY-terraform/', '/GTNY-cursor/', '/gtny-kubernetes/', '/gtny-opentelemetry/', '/gtny-argocd-gitops/']) {
  test(`axe accessibility scan passes for ${target}`, async ({ page }) => {
    await page.goto(target, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page }).analyze();
    const violations = results.violations.map(({ id, impact, help, nodes }) => ({
      id,
      impact,
      help,
      nodes: nodes.length,
    }));
    expect(violations, `Accessibility violations on ${target}: ${JSON.stringify(violations)}`).toEqual([]);
  });
}
