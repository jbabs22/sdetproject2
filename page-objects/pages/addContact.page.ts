import { expect, Page } from "@playwright/test";
import AddContactDetails from "../sections/details/addContactDetails.section";
import AddContactActions from "../sections/actions/addContactActions.section";
import ContactListActions from "../sections/actions/contactListActions.section";

export default class AddContactPage {
    page: Page;
    contactListActions: ContactListActions;
    addContactDetails: AddContactDetails;
    addContactActions: AddContactActions;


    constructor(page: Page) {
        this.page = page;
        this.addContactDetails = new AddContactDetails(this.page);
        this.addContactActions = new AddContactActions(this.page);
        this.contactListActions = new ContactListActions(this.page);
    }

    public async addNewContactToList() {
        await this.contactListActions.clickAddContact();
        await this.addContactDetails.addNewContactDetails();
        await this.addContactActions.submitNewContact();
    }
}