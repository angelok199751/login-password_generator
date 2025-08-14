import { test, expect } from '@playwright/test';
import { LPGPage } from '../../pages/lpg.page';

test.describe('Базовая функциональность генератора', () => {

test('001 - Страница сайта успешно загружается', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await expect(page).toHaveTitle('Генератор логина/пароля');
});

test('002 - Генератор отображает поля для логина и пароля', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await expect(page.locator(lpgPage.loginField)).toBeVisible();
  await expect(page.locator(lpgPage.passwordField)).toBeVisible();
});

test('003 - Есть кнопка генерации логина', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await expect(page.locator(lpgPage.generateLoginButton)).toBeVisible();
});

test('004 - Есть кнопка генерации пароля', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await expect(page.locator(lpgPage.generatePasswordButton)).toBeVisible();
});

test('005 - При нажатии на кнопку генерируются новые логин и пароль', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();

  const loginBefore = await lpgPage.getLoginValue();
  const passwordBefore = await lpgPage.getPasswordValue();

  await lpgPage.generatePassword();
  await lpgPage.generateLogin();

  const loginAfter = await lpgPage.getLoginValue();
  const passwordAfter = await lpgPage.getPasswordValue();

  expect(loginAfter).not.toBe(loginBefore);
  expect(passwordAfter).not.toBe(passwordBefore);
});

test('006 - Логин соответствует ожидаемому формату', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await lpgPage.generateLogin();
  const login = await lpgPage.getLoginValue();
  expect(login).toMatch(/^[A-Za-z]+[0-9]*$/);
});

test('007 - Пароль соответствует ожидаемому формату', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await lpgPage.togglePasswordSpecial(true);
  await lpgPage.generatePassword();
  const password = await lpgPage.getPasswordValue();
  expect(password.length).toBeGreaterThanOrEqual(8);
  expect(password).toMatch(/[A-Z]/);
  expect(password).toMatch(/[0-9]/);
  expect(password).toMatch(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/);
});

test('008 - Появляется подтверждение, что скопировано', async ({ page }) => {
  const lpgPage = new LPGPage(page);
  await lpgPage.navigate();
  await lpgPage.copyLogin();
  const tooltip = page.locator('.tooltip');
  await expect(tooltip).toHaveText(/Скопировано/i);
});

});
