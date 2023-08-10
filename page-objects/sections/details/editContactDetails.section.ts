import { expect, Page } from "@playwright/test";



export default class EditContactDetails {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    firstNameInput = () => this.page.locator('#firstName');
    lastNameInput = () => this.page.locator('#lastName');
    birthdateInput = () => this.page.locator('#birthdate');
    emailInput = () => this.page.locator('#email');
    phoneNumberInput = () => this.page.locator('#phone');
    street1Input = () => this.page.locator('#street1');
    street2Input = () => this.page.locator('#street2');
    cityInput = () => this.page.locator('#city');
    stateProvinceInput = () => this.page.locator('#stateProvince');
    postalCodeInput = () => this.page.locator('#postalCode');
    countryInput = () => this.page.locator('#country');



    // Actions
    public async editNewContactDetails() {

        await this.cityInput().clear();
        await this.cityInput().fill('Orlando');
        await this.countryInput().clear();
        await this.countryInput().fill('U.S.');

    }

}
