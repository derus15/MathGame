import { test, expect } from '@playwright/test';

test('base 15 seconds session', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    await page.getByRole('button', { name: ':15' }).click();
    await page.getByRole('button', { name: 'Стандарт' }).click();
    await page.getByRole('textbox').click();
    await page.waitForTimeout(15000);

    await expect(page.locator('#root')).toContainText('00:15');
    await expect(page.locator('#root')).toContainText('0');
    await expect(page.locator('#root')).toContainText('0.00');
});
