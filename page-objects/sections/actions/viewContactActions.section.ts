import { Page } from "@playwright/test";

export default class ViewContactActions {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    editContactBtn = () => this.page.locator('#edit-contact');


    // Actions
    public async clickEditContactBtn() {
        await this.editContactBtn().click();
    }

}
