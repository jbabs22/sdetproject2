import { expect, Page } from "@playwright/test";
import { faker } from '@faker-js/faker';

// test data
const randomFirstName = faker.person.firstName();
const staticLastName = 'lastname';
const staticBirthdate = '1990-01-01';
const randomEmail = faker.internet.email();
const staticPhoneNumber = '9045555555';
const randomStreet1 = faker.location.streetAddress();
const staticStreet2 = 'Apt 101';
const randomCity = faker.location.city();
const randomState = faker.location.state();
const randomPostalCode = faker.location.zipCode();
const randomCountry = faker.location.country();

export default class AddContactPage {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }


    // LOCATORS
    submitBtn = () => this.page.locator('#submit');
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

    // ACTIONS
    public async createNewContact() {
        await this.firstNameInput().fill(randomFirstName);
        await this.lastNameInput().fill(staticLastName);
        await this.birthdateInput().fill(staticBirthdate);
        await this.emailInput().fill(randomEmail);
        await this.phoneNumberInput().fill(staticPhoneNumber);
        await this.street1Input().fill(randomStreet1);
        await this.street2Input().fill(staticStreet2);
        await this.cityInput().fill(randomCity);
        await this.stateProvinceInput().fill(randomState);
        await this.postalCodeInput().fill(randomPostalCode);
        await this.countryInput().fill(randomCountry);
        await this.submitBtn().click();
    }

}


