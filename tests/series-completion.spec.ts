import { expect, test } from '@playwright/test';

test('Git to Know You is presented as a completed ten-article series', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'Series completion contract runs once in desktop Chromium.');

  await page.goto('/SRE-tools/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 2, name: 'The complete series' })).toBeVisible();
  await expect(page.getByText(/The first series is now complete at ten articles/i)).toBeVisible();
  await expect(page.getByRole('link', { name: /#10\. Argo CD and GitOps/i })).toHaveAttribute('href', '/gtny-argocd-gitops/');

  await page.goto('/gtny-argocd-gitops/', { waitUntil: 'networkidle' });
  const seriesNav = page.getByRole('navigation', { name: /Git to Know You series navigation/i });
  await expect(seriesNav.getByRole('link', { name: /Previous.*OpenTelemetry/i })).toHaveAttribute('href', '/gtny-opentelemetry/');
  await expect(seriesNav.getByRole('link', { name: /Next/i })).toHaveCount(0);
});
