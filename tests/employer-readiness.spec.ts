import { expect, test } from '@playwright/test';

test('nested portfolio routes preserve current navigation location', async ({ page }) => {
  const primaryNav = page.getByRole('navigation', { name: /primary navigation/i });

  await page.goto('/work/implementation-delivery/', { waitUntil: 'networkidle' });
  await expect(primaryNav.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page');
  await expect(primaryNav.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current', 'page');

  await page.goto('/gtny-kubernetes/', { waitUntil: 'networkidle' });
  await expect(primaryNav.getByRole('link', { name: 'Writing' })).toHaveAttribute('aria-current', 'page');
});

test('Resume presents direct identity, public-safe contact paths, and resume-style summary', async ({ page }) => {
  await page.goto('/resume/', { waitUntil: 'networkidle' });

  await expect(page).toHaveTitle('Mike Gilmore Resume | Technical Delivery & Customer Solutions');
  await expect(page.getByRole('heading', { level: 1, name: 'Mike Gilmore' })).toBeVisible();
  await expect(page.getByText('Technical Delivery & Customer Solutions', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Salt Lake City area', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'contactgilmore@gmail.com' })).toHaveAttribute('href', 'mailto:contactgilmore@gmail.com');
  await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toHaveAttribute('href', 'https://www.linkedin.com/in/contactgilmore/');
  await expect(page.getByRole('link', { name: 'GitHub' }).first()).toHaveAttribute('href', 'https://github.com/contactgilmore');
  await expect(page.getByText(/Customer-facing technical delivery professional with experience translating requirements/i)).toBeVisible();
  await expect(page.getByText(/I work where customer requirements/i)).toHaveCount(0);
});

test('case studies use precise claim language and provide a resume next step', async ({ page }) => {
  const cases = [
    '/work/implementation-delivery/',
    '/work/reliability-remediation/',
    '/work/operating-model/',
  ];

  for (const path of cases) {
    await page.goto(path, { waitUntil: 'networkidle' });
    const resumeLink = page.getByRole('link', { name: 'View resume' });
    const workLink = page.getByRole('link', { name: 'Back to selected work' });
    await expect(resumeLink).toHaveAttribute('href', '/resume/');
    await expect(workLink).toHaveAttribute('href', '/work/');
  }

  await page.goto('/work/reliability-remediation/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('durable remediation');
  await expect(page.getByText(/permanent remediation/i)).toHaveCount(0);

  await page.goto('/work/operating-model/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('shared operating model');
});

test('site identity metadata includes favicon, site name, and home WebSite structured data', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg');
  await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'Mike Gilmore');

  const jsonLdText = await page.locator('script[type="application/ld+json"]').textContent();
  const jsonLd = JSON.parse(jsonLdText || '{}');
  const graph = Array.isArray(jsonLd['@graph']) ? jsonLd['@graph'] : [];
  const website = graph.find((entry: { '@type'?: string }) => entry['@type'] === 'WebSite');

  expect(website).toMatchObject({
    '@type': 'WebSite',
    name: 'Mike Gilmore',
    alternateName: 'ContactGilmore',
    url: 'https://contactgilmore.github.io/',
  });

  const favicon = await request.get('/favicon.svg');
  expect(favicon.ok()).toBeTruthy();
  const faviconText = await favicon.text();
  expect(faviconText).toContain('viewBox="0 0 96 96"');
});

test('generic interior page titles identify their employer-facing purpose', async ({ page }) => {
  const pages = [
    { path: '/work/', title: 'Work & Case Studies | Mike Gilmore' },
    { path: '/about/', title: 'About Mike Gilmore | Technical Delivery & Customer Solutions' },
    { path: '/blog/', title: 'Technical Writing | Mike Gilmore' },
  ];

  for (const target of pages) {
    await page.goto(target.path, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(target.title);
  }
});
