import { expect, Page } from "@playwright/test";

export default class ContactListPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // LOCATORS
    addContactBtn = () => this.page.locator('#add-contact');
    contactListTable = () => this.page.locator('#myTable');
    newContactVisible = () => this.page.locator('#myTable');


    // ACTIONS
    public async assertAddContactBtnVisible() {
        await expect(this.addContactBtn()).toBeVisible();
    }

    public async clickAddContactBtn() {
        await this.addContactBtn().click()
    }

    public async assertNewContactFoundOnList() {
        await expect(this.newContactVisible()).toContainText('lastname');
    }

    public async clickOnContactFromList() {
        await this.contactListTable().first().click();
    }


}

