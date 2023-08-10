import { expect, Page } from "@playwright/test";
import ContactListActions from "../sections/actions/contactListActions.section";
import ContactListDetails from "../sections/details/contactListDetails.section";

export default class ContactListPage {
    page: Page;
    contactListActions: ContactListActions;
    contactListDetails: ContactListDetails;

    constructor(page: Page) {
        this.page = page;
        this.contactListActions = new ContactListActions(this.page);
        this.contactListDetails = new ContactListDetails(this.page);
    }

    public async assertAddContactBtnVisible() {
        await this.contactListActions.assertAddContactVisible();
    }

    public async clickAddContactBtn() {
        await this.contactListActions.clickAddContact();
    }

    public async assertNewContactFoundOnList() {
        await this.contactListDetails.verifyNewContactFoundOnList();
    }

    public async clickOnContactFromList() {
        await this.contactListActions.clickOnContactInList();
    }


}