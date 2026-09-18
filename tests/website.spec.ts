import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';

test('catalogue filters and product navigation work', async ({ page }) => {
  await page.goto('/products/');
  await expect(page.locator('.product-card')).toHaveCount(8);
  await page.getByRole('navigation', {name: 'Product divisions'}).getByRole('link', {name: /Industrial materials/}).click();
  await expect(page.locator('.product-card')).toHaveCount(4);
  await expect(page.getByRole('heading', {name: 'Soap noodles', exact: true})).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Granola', exact: true})).toHaveCount(0);
  await page.getByRole('navigation', {name: 'Product divisions'}).getByRole('link', {name: /Food & consumer products/}).click();
  await expect(page.locator('.product-card')).toHaveCount(4);
  await expect(page.getByRole('heading', {name: 'Granola', exact: true})).toBeVisible();
  await page.goto('/products/soap-noodles/');
  await expect(page.getByRole('heading', {name: 'Soap noodles', exact: true})).toBeVisible();
  await page.getByRole('main').getByRole('link', {name: 'Request a quote', exact: true}).click();
  await expect(page.getByRole('textbox', {name: 'Product', exact: true})).toHaveValue('Soap noodles');
});

test('enquiry downloads a local draft and invalidates stale output', async ({ page }) => {
  const writes: string[] = [];
  page.on('request', request => {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method())) writes.push(request.url());
  });
  await page.goto('/contact/?product=Soap%20noodles&variant=Test%20grade');
  await expect(page.getByRole('textbox', {name: 'Product', exact: true})).toHaveValue('Soap noodles');
  await page.getByRole('textbox', {name: 'Full name', exact: true}).fill('Portfolio Test');
  await page.getByRole('textbox', {name: 'Company', exact: true}).fill('Example Company');
  await page.getByRole('textbox', {name: 'Email address', exact: true}).fill('test@example.com');
  await page.getByRole('textbox', {name: 'Quantity & unit', exact: true}).fill('50 bags');
  await page.getByRole('textbox', {name: 'Delivery city / state', exact: true}).fill('Lagos');
  await page.getByRole('button', {name: 'Prepare enquiry'}).click();
  await expect(page.getByRole('status')).toContainText('It has not been sent');
  const downloaded = page.waitForEvent('download');
  await page.getByRole('button', {name: 'Download draft'}).click();
  const download = await downloaded;
  expect(download.suggestedFilename()).toBe('imoko-enquiry.txt');
  const text = await fs.readFile((await download.path())!, 'utf8');
  expect(text).toContain('Product: Soap noodles');
  expect(text).toContain('Grade / variant: Test grade');
  expect(text).toContain('Quantity: 50 bags');
  expect(writes).toEqual([]);
  await page.getByRole('textbox', {name: 'Quantity & unit', exact: true}).fill('60 bags');
  await expect(page.getByRole('button', {name: 'Download draft'})).toHaveCount(0);
});

test('home is usable at mobile width', async ({ page }) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false);
});

test('case study screenshots', async ({ page }) => {
  test.skip(process.env.CAPTURE_CASE_STUDY !== '1' || process.env.IMOKO_APP === 'vercel-preview', 'Opt-in production documentation capture');
  await fs.mkdir('docs/screenshots', {recursive: true});
  await page.goto('/');
  await page.screenshot({path: 'docs/screenshots/home.png'});
  await page.goto('/products/');
  await expect(page.locator('.product-card')).toHaveCount(8);
  await page.screenshot({path: 'docs/screenshots/catalogue.png'});
});
