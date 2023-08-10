import { expect, Page } from "@playwright/test";

export default class ContactListDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    newContactVisible = () => this.page.locator('#myTable');


    // Actions
    public async verifyNewContactFoundOnList() {
        await expect(this.newContactVisible()).toContainText('lastname');

    }

}

