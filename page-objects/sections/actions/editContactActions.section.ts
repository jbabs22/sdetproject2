import { Page } from "@playwright/test";

export default class EditContactActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    submitBtn = () => this.page.locator('#submit');


    // Actions
    public async submitEditContactDetails() {
        await this.submitBtn().click();
    }

}
