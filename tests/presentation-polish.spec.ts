import { expect, test } from '@playwright/test';

test('Writing orders publications deterministically and distinguishes series introductions', async ({ page }) => {
  await page.goto('/blog/', { waitUntil: 'networkidle' });

  const rows = page.locator('.writing-row');

  await expect(rows.nth(0).getByRole('link', { name: '#1. Prompt. Prove. Ship.: Context Is Part of the System' }))
    .toHaveAttribute('href', '/prompt-prove-ship-context/');
  await expect(rows.nth(0).locator('.writing-row__date')).toContainText('Aug 27, 2026');

  await expect(rows.nth(1).getByRole('link', { name: 'Prompt. Prove. Ship.: From Chat to Change' }))
    .toHaveAttribute('href', '/prompt-prove-ship/');
  await expect(rows.nth(1)).toHaveClass(/writing-row--series-intro/);
  await expect(rows.nth(1).getByText('Series introduction')).toBeVisible();

  await expect(rows.nth(2).getByRole('link', { name: '#10. Git to Know You: Argo CD and GitOps' }))
    .toHaveAttribute('href', '/gtny-argocd-gitops/');
  await expect(rows.nth(3).getByRole('link', { name: '#9. Git to Know You: OpenTelemetry' }))
    .toHaveAttribute('href', '/gtny-opentelemetry/');
  await expect(rows.nth(4).getByRole('link', { name: '#8. Git to Know You: Kubernetes' }))
    .toHaveAttribute('href', '/gtny-kubernetes/');

  // Cursor was materially updated on Aug 8, 2026, but its original publication
  // date remains Feb 25, 2026. Updates must not promote an older post above new publications.
  await expect(rows.nth(5).getByRole('link', { name: '#7. Git to Know You: Cursor' }))
    .toHaveAttribute('href', '/GTNY-cursor/');
  await expect(rows.nth(5).locator('.writing-row__date')).toContainText('Feb 25, 2026');
  await expect(rows.nth(5).locator('.writing-row__date')).toContainText('Updated Aug 8, 2026');

  const introStyle = await rows.nth(1).evaluate((element) => {
    const style = getComputedStyle(element);
    const marker = getComputedStyle(element, '::before');
    return {
      backgroundImage: style.backgroundImage,
      markerWidth: marker.width,
      markerColor: marker.backgroundColor,
    };
  });

  expect(introStyle.backgroundImage).not.toBe('none');
  expect(Number.parseFloat(introStyle.markerWidth)).toBeGreaterThanOrEqual(2);
  expect(introStyle.markerColor).not.toBe('rgba(0, 0, 0, 0)');
});

test('Work case-study rows keep evidence distinct from the primary case-study action', async ({ page }) => {
  await page.goto('/work/', { waitUntil: 'networkidle' });

  const row = page.locator('.work-index-row').first();
  const proof = row.locator('.work-index-row__proof');
  const link = row.getByRole('link', { name: /View case study/i });

  await expect(proof).toBeVisible();
  await expect(link).toBeVisible();
  await expect(row.locator('.work-index-evidence li')).toHaveCount(3);
  await expect(row.locator('.work-index-skills li')).toHaveCount(5);

  const proofBox = await proof.boundingBox();
  const linkBox = await link.boundingBox();

  expect(proofBox).not.toBeNull();
  expect(linkBox).not.toBeNull();
  expect(proofBox?.width ?? 0).toBeGreaterThan(180);
});

test('series introduction thumbnails use wordless vector artwork', async ({ page, request }) => {
  const introductions = [
    {
      path: '/SRE-tools/',
      asset: '/assets/images/blog2025/0622/git-to-know-you-intro.svg',
    },
    {
      path: '/prompt-prove-ship/',
      asset: '/assets/images/blog2026/082026/prompt-prove-ship.svg',
    },
  ];

  for (const introduction of introductions) {
    await page.goto(introduction.path, { waitUntil: 'networkidle' });
    await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', introduction.asset);
    await expect(page.locator('.blog-thumbnail')).toHaveCSS('object-fit', 'contain');

    const response = await request.get(introduction.asset);
    expect(response.ok()).toBeTruthy();
    expect(await response.text()).not.toMatch(/<text\b/i);
  }
});
