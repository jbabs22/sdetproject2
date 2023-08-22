import { expect, Page } from "@playwright/test";

export default class ViewContactPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // LOCATORS
  editContactBtn = () => this.page.locator("#edit-contact");
  viewEditedContactCity = () => this.page.getByText("Orlando");
  viewEditedContactCountry = () => this.page.getByText("U.S.");

  // ACTIONS
  public async clickEditContactBtn() {
    await this.editContactBtn().click();
  }

  public async assertEditContactDetailsSuccess() {
    await expect(this.viewEditedContactCity()).toBeVisible();
    await expect(this.viewEditedContactCountry()).toBeVisible();
  }
}
