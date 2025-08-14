import { Page } from '@playwright/test';

export class LPGPage {
    readonly page: Page;
//Login
    readonly loginField = '#login-field' // поле для логина
    readonly generateLoginButton = '#generate-login-btn' // кнопка генерации логина
    readonly copyLoginButton = '#copy-login' // кнопка копирования логина 
    readonly checkboxDigitsLogin = '#checkbox-digits-login' // чекбокс для цифр в логине
    readonly checkboxSpecialLogin = '#checkbox-special-login' // чекбокс для спецсимволов в логине
    readonly checkboxTwoNameLogin = '#checkbox-two-names' // чекбокс для выбора двух имен в логине
    readonly loginSeparator = '#separator' // селектор для разделителя в логине

//Password
    readonly passwordField = '#password-field' // поле для пароля
    readonly generatePasswordButton = '#generate-btn' // кнопка генерации пароля
    readonly copyPasswordButton = '#copy-password' // кнопка копирования пароля
    readonly checkboxDigitsPassword = '#checkbox-digits' // чекбокс для цифр в пароле
    readonly checkboxSpecialPassword = '#checkbox-special' // чекбокс для спецсимволов в пароле
    readonly checkboxUppercasePassword = '#checkbox-uppercase' // чекбокс для заглавных букв в пароле
    readonly passwordLowercase = '#checkbox-lowercase' // чекбокс для строчных букв в пароле
    readonly passwordLengthSlider = '#password-length-slider' // слайдер для длины пароля


  constructor(page: Page) {
    this.page = page;
  }
  async navigate() {
    await this.page.goto('https://login-password-generator-8329.vercel.app/');}
async generateLogin() {
    await this.page.click(this.generateLoginButton);
  }

  async copyLogin() {
    await this.page.click(this.copyLoginButton);
  }

  async setLoginSeparator(separator: string) {
    await this.page.fill(this.loginSeparator, separator);
  }

  async toggleLoginDigits(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxDigitsLogin);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxDigitsLogin);
    }
  }

  async toggleLoginSpecial(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxSpecialLogin);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxSpecialLogin);
    }
  }

  async toggleTwoNames(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxTwoNameLogin);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxTwoNameLogin);
    }
  }

  async getLoginValue() {
    return await this.page.inputValue(this.loginField);
  }

  // ПАРОЛЬ
  async generatePassword() {
    await this.page.click(this.generatePasswordButton);
  }

  async copyPassword() {
    await this.page.click(this.copyPasswordButton);
  }

  async togglePasswordDigits(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxDigitsPassword);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxDigitsPassword);
    }
  }

  async togglePasswordSpecial(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxSpecialPassword);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxSpecialPassword);
    }
  }

  async togglePasswordUppercase(enable: boolean) {
    const isChecked = await this.page.isChecked(this.checkboxUppercasePassword);
    if (isChecked !== enable) {
      await this.page.click(this.checkboxUppercasePassword);
    }
  }

  async togglePasswordLowercase(enable: boolean) {
    const isChecked = await this.page.isChecked(this.passwordLowercase);
    if (isChecked !== enable) {
      await this.page.click(this.passwordLowercase);
    }
  }

  async setPasswordLength(length: number) {
    await this.page.fill(this.passwordLengthSlider, length.toString());
  }

  async getPasswordValue() {
    return await this.page.inputValue(this.passwordField);
  }

}