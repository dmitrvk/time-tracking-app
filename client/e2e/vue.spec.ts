import { test, expect, Locator } from '@playwright/test';

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
})

test('changes the button state', async ({ page }) => {
  await page.goto('/');
  const startButton: Locator = page.getByTestId('start-button');
  const stopButton: Locator = page.getByTestId('stop-button');
  await expect(startButton).toBeVisible();
  await expect(stopButton).toBeHidden();
  await page.getByTestId('start-button').click();
  await expect(page.getByTestId('start-button')).toBeHidden();
  await expect(page.getByTestId('stop-button')).toBeVisible();
  await page.getByTestId('stop-button').click();
  await expect(page.getByTestId('start-button')).toBeVisible();
  await expect(page.getByTestId('stop-button')).toBeHidden();
})
