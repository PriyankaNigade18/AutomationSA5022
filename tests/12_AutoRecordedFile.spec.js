import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('priyanka25@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Login' }).click();
});