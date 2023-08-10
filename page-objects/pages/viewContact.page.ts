import { expect, Page } from "@playwright/test";
import ViewContactActions from "../sections/actions/viewContactActions.section";
import ViewContactDetails from "../sections/details/viewContactDetails.section";

export default class ViewContactPage {
    page: Page;
    viewContactActions: ViewContactActions;
    viewContactDetails: ViewContactDetails;



    constructor(page: Page) {
        this.page = page;
        this.viewContactActions = new ViewContactActions(this.page);
        this.viewContactDetails = new ViewContactDetails(this.page);
    }

    public async clickEditContactButton() {
        
        await this.viewContactActions.clickEditContactBtn();
    }

    public async assertEditContactSuccessful() {

        await this.viewContactDetails.assertEditedContactDetails();

    }
}