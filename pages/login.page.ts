import { expect, Page } from "@playwright/test";

// test data
const validEmail = 'jbabcock@icsfl.com';
const validPassword = 'tESTING123';
const invalidPassword = 'invalid123';

export default class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // LOCATORS
    submitBtn = () => this.page.locator('#submit');
    emailInput = () => this.page.locator('#email');
    passwordInput = () => this.page.locator('#password');
    loginErrorMsg = () => this.page.locator('#error');


    // ACTIONS
    public async goto() {
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    }

    
    public async inputValidLoginCredentials() {
        await this.emailInput().fill(validEmail);
        await this.passwordInput().fill(validPassword);
    }
    public async inputInvalidLoginCredentials() {
        await this.emailInput().fill(validEmail);
        await this.passwordInput().fill(invalidPassword);
    }

    public async submitLoginCredentials() {
        await this.submitBtn().click();
    }

    public async assertInvalidLoginErrorMsg() {
        await expect(this.loginErrorMsg()).toBeVisible();
    }
}