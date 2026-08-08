import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home' },
  { path: '/work/', name: 'work' },
  { path: '/blog/', name: 'writing' },
  { path: '/about/', name: 'about' },
  { path: '/resume/', name: 'resume' },
  { path: '/GTNY-cursor/', name: 'article' },
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

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(
      overflow.scrollWidth,
      `${pageTarget.path} should not overflow horizontally (${overflow.scrollWidth}px > ${overflow.clientWidth}px)`,
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
