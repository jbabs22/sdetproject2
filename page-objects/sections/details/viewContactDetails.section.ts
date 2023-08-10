import { expect, Page } from "@playwright/test";



export default class ViewContactDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    viewEditedContactCity = () => this.page.getByText('Orlando');
    viewEditedContactCountry = () => this.page.getByText('U.S.');



    // Actions
    public async assertEditedContactDetails() {
        await expect(this.viewEditedContactCity()).toBeVisible();
        await expect(this.viewEditedContactCountry()).toBeVisible();
    }
    
}