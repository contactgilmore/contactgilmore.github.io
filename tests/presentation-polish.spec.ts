import { expect, test } from '@playwright/test';

test('Writing orders same-day publications deterministically and distinguishes series introductions', async ({ page }) => {
  await page.goto('/blog/', { waitUntil: 'networkidle' });

  const rows = page.locator('.writing-row');

  await expect(rows.nth(0).getByRole('link', { name: 'Prompt. Prove. Ship.: From Chat to Change' }))
    .toHaveAttribute('href', '/prompt-prove-ship/');
  await expect(rows.nth(0)).toHaveClass(/writing-row--series-intro/);
  await expect(rows.nth(0).getByText('Series introduction')).toBeVisible();

  await expect(rows.nth(1).getByRole('link', { name: '#10. Git to Know You: Argo CD and GitOps' }))
    .toHaveAttribute('href', '/gtny-argocd-gitops/');
  await expect(rows.nth(2).getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' }))
    .toHaveAttribute('href', '/gtny-opentelemetry/');
  await expect(rows.nth(3).getByRole('link', { name: '#8. Git to Know You: Kubernetes' }))
    .toHaveAttribute('href', '/gtny-kubernetes/');

  const introStyle = await rows.nth(0).evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      backgroundColor: style.backgroundColor,
      borderRadius: style.borderRadius,
    };
  });

  expect(introStyle.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  expect(Number.parseFloat(introStyle.borderRadius)).toBeGreaterThan(0);
});

test('Work case-study actions have clear separation from capability pills', async ({ page }) => {
  await page.goto('/work/', { waitUntil: 'networkidle' });

  const card = page.locator('.detail-card').first();
  const tags = card.locator('.tag-list');
  const link = card.getByRole('link', { name: 'View case study →' });

  const tagsBox = await tags.boundingBox();
  const linkBox = await link.boundingBox();

  expect(tagsBox).not.toBeNull();
  expect(linkBox).not.toBeNull();

  const gap = (linkBox?.y ?? 0) - ((tagsBox?.y ?? 0) + (tagsBox?.height ?? 0));
  expect(gap).toBeGreaterThanOrEqual(20);
});
