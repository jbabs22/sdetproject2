import { Page } from "@playwright/test";

export default class LoginActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    submitBtn = () => this.page.locator('#submit');


    // Actions
    public async submitLoginCredentials() {
        await this.submitBtn().click();
    }

}
