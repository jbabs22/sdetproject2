import { test } from "@playwright/test";
import LoginPage from "../page-objects/pages/login.page";
import ContactListPage from "../page-objects/pages/contactList.page";
import AddContactPage from "../page-objects/pages/addContact.page";
import ViewContactPage from "../page-objects/pages/viewContact.page";
import EditContactPage from "../page-objects/pages/editContact.page";


// Go to the starting url before each test
test.beforeEach(async ({ page }) => {
    await test.step('Go to Login Page', async () => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
    })
});


// Describe = Test Suite
test.describe('Login Validation', () => {
    // Test = Test Case
    test('login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);

        await test.step('User Successfully Logs In', async () => {
            
            await loginPage.validLogin();

        })

        await test.step('Validate Successful Login by Verifying Add Contact is Visible', async () => {

            await contactListPage.assertAddContactBtnVisible();

        })
    })
})



test.describe('Positive Test Validation', () => {

    test('add new contact to contact list', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const addContactPage = new AddContactPage(page);
        const contactListPage = new ContactListPage(page);

        await test.step('User Successfully Logs In', async () => {
            
            await loginPage.validLogin();

        })

        await test.step('Add New Contact to Contact List', async () => {
            
            await addContactPage.addNewContactToList();

        })

        await test.step('Validate New Contact is Found on List', async () => {

            await contactListPage.assertNewContactFoundOnList();

        })
    })
})



test.describe('Negative Test Validation', () => {
    test('invalid login should display error', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Submit Invalid Login Credentials', async () => {

            await loginPage.invalidLogin();

        })

        await test.step('Validate User Receives Error Trying to Login', async () => {

            await loginPage.assertInvalidLoginError();

        })
    })
})



test.describe('End to End Validation', () => {

    test('e2e - Login, Add Contact, & Edit Contact', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const contactListPage = new ContactListPage(page);  
        const addContactPage = new AddContactPage(page);
        const viewContactPage = new ViewContactPage(page);
        const editContactPage = new EditContactPage(page);

        await test.step('User Successfully Logs In', async () => {
            
            await loginPage.validLogin();

        })

        await test.step('Validate User is able to view Add a New Contact button', async () => {

            await contactListPage.assertAddContactBtnVisible();

        })

        await test.step('Add New Contact to Contact List', async () => {
                
            await addContactPage.addNewContactToList();
    
        })
    
        await test.step('Validate New Contact is Found on List', async () => {
    
            await contactListPage.assertNewContactFoundOnList();
    
        })

        await test.step('Click Contact from List to Edit', async () => {

            await contactListPage.clickOnContactFromList();
            await viewContactPage.clickEditContactButton();

        })

        await test.step('Edit Contact Information', async () => {

            await editContactPage.submitEditedContactDetails();

        })

    })
})