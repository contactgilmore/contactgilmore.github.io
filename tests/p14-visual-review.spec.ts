import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.join(process.cwd(), 'p14-visual-review');

const viewports = [
  { name: 'desktop-1600x900', width: 1600, height: 900 },
  { name: 'desktop-1440x900', width: 1440, height: 900 },
  { name: 'laptop-1280x800', width: 1280, height: 800 },
  { name: 'tablet-1024x768', width: 1024, height: 768 },
  { name: 'phone-390x844', width: 390, height: 844 },
];

const surfaces = [
  { name: 'home', path: '/' },
  { name: 'work', path: '/work/' },
  { name: 'implementation-case', path: '/work/implementation-delivery/' },
  { name: 'about', path: '/about/' },
  { name: 'resume', path: '/resume/' },
  { name: 'writing', path: '/blog/' },
  { name: 'article', path: '/prompt-prove-ship-context/' },
];

test.skip(process.env.P14_VISUAL_REVIEW !== '1', 'P14 visual capture is a local opt-in acceptance harness.');

test.beforeEach(async ({ page }) => {
  await page.route('https://static.cloudflareinsights.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }),
  );
});

fs.mkdirSync(outputRoot, { recursive: true });

for (const viewport of viewports) {
  for (const surface of surfaces) {
    test(`${viewport.name} — ${surface.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.emulateMedia({ reducedMotion: 'reduce' });

      const response = await page.goto(surface.path, { waitUntil: 'networkidle' });
      expect(response?.ok(), `${surface.path} should load successfully`).toBeTruthy();

      await page.evaluate(async () => {
        await document.fonts.ready;
        window.scrollTo(0, 0);
      });

      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('h1')).toHaveCount(1);

      const base = `${viewport.name}--${surface.name}`;

      await page.screenshot({
        path: path.join(outputRoot, `${base}--fold.jpg`),
        type: 'jpeg',
        quality: 88,
        fullPage: false,
        animations: 'disabled',
      });

      await page.screenshot({
        path: path.join(outputRoot, `${base}--full.jpg`),
        type: 'jpeg',
        quality: 84,
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
}
