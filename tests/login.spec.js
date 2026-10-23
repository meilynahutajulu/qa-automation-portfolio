
const { test, expect } = require('@playwright/test');

test('TC-01 - login dengan kredensial valid', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();
});


test('TC-02 - login dengan password salah', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('h3')
  ).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

test('TC-03 - login dengan username kosong', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('h3')
  ).toHaveText(
    'Epic sadface: Username is required'
  );
});

test('TC-04 - login dengan password kosong', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('h3')
  ).toHaveText(
    'Epic sadface: Password is required'
  );
});

test('TC-05 - login dengan username dan password kosong', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').fill('');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.locator('h3')
  ).toHaveText(
    'Epic sadface: Username is required'
  );
});


test('TC-06 - login dengan akun yang terkunci', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('h3')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});
