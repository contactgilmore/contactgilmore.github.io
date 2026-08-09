import { expect, test } from '@playwright/test';

const laptopViewports = [
  { name: 'laptop-1440x900', width: 1440, height: 900 },
  { name: 'laptop-1280x800', width: 1280, height: 800 },
];

test('homepage hero keeps the value proposition and primary CTA in the first laptop viewport', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'Dedicated laptop evidence runs once in desktop Chromium.');

  for (const viewport of laptopViewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    const response = await page.goto('/', { waitUntil: 'networkidle' });
    expect(response?.ok()).toBeTruthy();

    const heading = page.getByRole('heading', {
      level: 1,
      name: /I turn complex SaaS requirements into clear delivery plans, stable systems, and better customer outcomes/i,
    });
    const primaryCta = page.getByRole('link', { name: 'View selected work' });

    await expect(heading).toBeVisible();
    await expect(primaryCta).toBeVisible();

    const headingBox = await heading.boundingBox();
    const ctaBox = await primaryCta.boundingBox();

    expect(headingBox, `${viewport.name}: hero heading should have a layout box`).not.toBeNull();
    expect(ctaBox, `${viewport.name}: primary CTA should have a layout box`).not.toBeNull();
    expect(
      (ctaBox?.y ?? viewport.height) + (ctaBox?.height ?? 0),
      `${viewport.name}: primary CTA should remain inside the initial ${viewport.height}px viewport`,
    ).toBeLessThanOrEqual(viewport.height);

    await page.screenshot({
      path: testInfo.outputPath(`${viewport.name}-home.png`),
      fullPage: false,
    });
  }
});
