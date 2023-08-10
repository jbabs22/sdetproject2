import { Page } from "@playwright/test";

export default class AddContactActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    submitBtn = () => this.page.locator('#submit');


    // Actions
    public async submitNewContact() {
        await this.submitBtn().click();
    }

}
