import { test, expect } from '@playwright/test';

test.describe('Базовая функциональность генератора', () => {

  test('001 - Страница сайта успешно загружается', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await expect(page).toHaveTitle('Генератор логина/пароля');
  });

  test('002 - Генератор отображает поля для логина и пароля', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await expect(page.locator('#«r2»')).toBeVisible();
    await expect(page.locator('#«r6»')).toBeVisible();

  });

  test('003 - Есть кнопка генерации', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await expect(page.locator('#generate-btn')).toBeVisible();
  });

  test('004 - При нажатии на кнопку генерируются новые логин и пароль', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    const loginBefore = await page.locator('#login').inputValue();
    const passwordBefore = await page.locator('#password').inputValue();
    await page.click('#generate-btn');
    const loginAfter = await page.locator('#login').inputValue();
    const passwordAfter = await page.locator('#password').inputValue();
    expect(loginAfter).not.toBe(loginBefore);
    expect(passwordAfter).not.toBe(passwordBefore);
  });

  test('005 - Логин соответствует ожидаемому формату', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await page.click('#generate-btn');
    const login = await page.locator('#login').inputValue();
    expect(login).toMatch(/^[A-Za-z]+[0-9]*$/); // пример формата: имя + цифры
  });

  test('006 - Пароль соответствует ожидаемому формату', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await page.click('#generate-btn');
    const password = await page.locator('#password').inputValue();
    expect(password.length).toBeGreaterThanOrEqual(8); // минимальная длина
    expect(password).toMatch(/[A-Z]/); // хотя бы одна заглавная
    expect(password).toMatch(/[0-9]/); // хотя бы одна цифра
    expect(password).toMatch(/[!@#$%^&*]/); // хотя бы один спецсимвол
  });

  test('007 - Значения копируются по нажатию на иконку копирования', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await page.click('#copy-login');
    // Можно проверить clipboard (Playwright поддерживает)
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    const login = await page.locator('#login').inputValue();
    expect(clipboardText).toBe(login);
  });

  test('008 - Появляется подтверждение, что скопировано', async ({ page }) => {
    await page.goto('https://login-password-generator.vercel.app/');
    await page.click('#copy-login');
    const tooltip = page.locator('.tooltip'); // класс вашего тултипа
    await expect(tooltip).toHaveText(/Скопировано/i);
  });

});
