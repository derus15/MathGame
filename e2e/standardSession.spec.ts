import { test, expect } from '@playwright/test';

test('"Standard" Auth session in 15 seconds', async ({ page }) => {

    const emailValue = '9608212667i@gmail.com';
    const passwordValue = '12345690';
    
    await page.goto('http://localhost:3000/auth');

    const EmailInput = page.locator('form').filter({ hasText: 'Логин' }).getByPlaceholder('Почта');
    const PasswordInput = page.locator('form').filter({ hasText: 'Логин' }).getByPlaceholder('Пароль');

    await EmailInput.fill(emailValue);
    await PasswordInput.fill(passwordValue);

    await page.getByRole('button', { name: 'Войти' }).click();
    await page.waitForURL('http://localhost:3000/account');

    await page.goto('http://localhost:3000');

    await page.click('text=Стандарт');
    await page.click('text=0:15');
    const timeElement = page.locator('text=15,0');
    await expect(timeElement).toBeVisible();

    const exampleInput = page.getByRole('textbox');
    await exampleInput.focus();

    async function solveExample() {
        const exampleText = await page.getByTestId('example').innerText();
        const [expression, equal] = exampleText.split('=');
        // eslint-disable-next-line no-eval
        const solution = eval(expression.trim());
        await exampleInput.fill(String(solution));
    }

    await solveExample();
    await solveExample();
    await solveExample();

    await page.waitForTimeout(15000);

    const endText = await page.locator('text=Результаты сессии').innerText();
    expect(endText).toBe('Результаты сессии');

    await expect(page.getByText('Примеров решено:3')).toBeVisible();
    await expect(page.getByText('Ваше время:00:15')).toBeVisible();
    await expect(page.getByText('ПВС:0.20')).toBeVisible();
    await expect(page.getByText('Сид:')).toBeVisible();

});
