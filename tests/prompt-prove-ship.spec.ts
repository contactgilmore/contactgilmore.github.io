import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Prompt. Prove. Ship. introduction renders cleanly and is discoverable', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  const response = await page.goto('/prompt-prove-ship/', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Prompt. Prove. Ship.: From Chat to Change');
  await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', '/assets/images/blog2026/082026/prompt-prove-ship.svg');
  await expect(page.locator('.post-date')).toContainText('Published August 8, 2026');
  await expect(page.getByText(/AI-assisted engineering without outsourcing judgment/i)).toBeVisible();

  const viewport = page.viewportSize();
  if (viewport) {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width);
  }
  expect(consoleErrors).toEqual([]);

  await page.goto('/blog/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('link', { name: 'Prompt. Prove. Ship.: From Chat to Change' })).toHaveAttribute('href', '/prompt-prove-ship/');
});

test('Prompt. Prove. Ship. introduction passes accessibility scan', async ({ page }) => {
  await page.goto('/prompt-prove-ship/', { waitUntil: 'networkidle' });
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('P11 Context installment renders, is discoverable, and connects the series', async ({ page }) => {
  const title = '#1. Prompt. Prove. Ship.: Context Is Part of the System';
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  const response = await page.goto('/prompt-prove-ship-context/', { waitUntil: 'networkidle' });
  expect(response?.ok()).toBeTruthy();
  await expect(page.getByRole('heading', { level: 1 })).toContainText(title);
  await expect(page.locator('.blog-thumbnail')).toHaveAttribute('src', '/assets/images/blog2026/082026/prompt-prove-ship-context.svg');
  await expect(page.locator('.post-date')).toContainText('Published August 27, 2026');
  await expect(page.getByText('The giant prompt is a smell.')).toBeVisible();
  await expect(page.getByText(/That is where the next installment goes: Plan Before Edit/i)).toBeVisible();

  const viewport = page.viewportSize();
  if (viewport) {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width);
  }
  expect(consoleErrors).toEqual([]);

  await page.goto('/blog/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('link', { name: title })).toHaveAttribute('href', '/prompt-prove-ship-context/');

  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('link', { name: title })).toHaveAttribute('href', '/prompt-prove-ship-context/');

  await page.goto('/prompt-prove-ship/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('link', { name: title })).toHaveAttribute('href', '/prompt-prove-ship-context/');
});

test('P11 Context installment passes accessibility scan', async ({ page }) => {
  await page.goto('/prompt-prove-ship-context/', { waitUntil: 'networkidle' });
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
