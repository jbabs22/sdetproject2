import { expect, Page } from "@playwright/test";
import EditContactDetails from "../sections/details/editContactDetails.section";
import EditContactActions from "../sections/actions/editContactActions.section";

export default class EditContactPage {
    page: Page;
    editContactDetails: EditContactDetails;
    editContactActions: EditContactActions;


    constructor(page: Page) {
        this.page = page;
        this.editContactDetails = new EditContactDetails(this.page);
        this.editContactActions = new EditContactActions(this.page);
    }

    public async submitEditedContactDetails() {
        await this.editContactDetails.editNewContactDetails();
        await this.editContactActions.submitEditContactDetails();
    }
}