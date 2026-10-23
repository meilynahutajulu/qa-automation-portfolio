
const { test, expect } = require('@playwright/test');

test('halaman dokumentasi example.com berhasil dibuka', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Example Domain');

  await expect(
    page.getByText(
      'This domain is for use in documentation examples without needing permission.',
      { exact: false }
    )
  ).toBeVisible();
});
