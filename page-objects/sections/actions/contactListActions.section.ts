import { expect, Page } from "@playwright/test";

export default class ContactListActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    addContactBtn = () => this.page.locator('#add-contact');
    contactListTable = () => this.page.locator('#myTable');


    // Actions
    public async assertAddContactVisible() {
        await expect(this.addContactBtn()).toBeVisible();
    }


    public async clickAddContact() {
        await this.addContactBtn().click()
    }

    public async clickOnContactInList() {
        await this.contactListTable().first().click();
    }

}



