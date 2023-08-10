import { expect, Page } from "@playwright/test";
import LoginActions from "../sections/actions/loginActions.section";
import LoginDetails from "../sections/details/loginDetails.section";

export default class LoginPage {
    page: Page;
    loginActions: LoginActions;
    loginDetails: LoginDetails;

    constructor(page: Page) {
        this.page = page;
        this.loginActions = new LoginActions(this.page);
        this.loginDetails = new LoginDetails(this.page);
    }

    public async goto() {
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    }

    public async validLogin() {
        await this.loginDetails.enterValidCredentials();
        await this.loginActions.submitLoginCredentials();
    }

    public async invalidLogin() {
        await this.loginDetails.enterInvalidCredentials();
        await this.loginActions.submitLoginCredentials();
    }

    public async assertInvalidLoginError() {
        await this.loginDetails.assertInvalidLoginErrorMsg();
    }
}