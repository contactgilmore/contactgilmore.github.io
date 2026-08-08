import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home' },
  { path: '/work/', name: 'work' },
  { path: '/work/implementation-delivery/', name: 'implementation-case' },
  { path: '/work/reliability-remediation/', name: 'reliability-case' },
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
