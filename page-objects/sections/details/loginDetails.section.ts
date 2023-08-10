import { expect, Page } from "@playwright/test";

// test data
const validEmail = 'jbabcock@icsfl.com';
const validPassword = 'tESTING123';
const invalidPassword = 'invalid123';

export default class LoginDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    emailInput = () => this.page.locator('#email');
    passwordInput = () => this.page.locator('#password');
    loginErrorMsg = () => this.page.locator('#error');


    // Actions
    public async enterValidCredentials() {
        await this.emailInput().fill(validEmail);
        await this.passwordInput().fill(validPassword);
    }

    public async enterInvalidCredentials() {
        await this.emailInput().fill(validEmail);
        await this.passwordInput().fill(invalidPassword);
    }

    public async assertInvalidLoginErrorMsg() {
        await expect(this.loginErrorMsg()).toBeVisible();
    }

}
