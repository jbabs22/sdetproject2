import { test, expect } from "@playwright/test";

import { user } from "./testdata";
import { LoginPage } from "../pages/login-page";
import { ContactListPage } from "../pages/contactlist-page";

test("User can login and logout", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(user.email, user.password);

  const contactlistPage = new ContactListPage(page);
  const userIsLoggedIn = await contactlistPage.userIsLoggedIn();
  expect(userIsLoggedIn).toBeTruthy();

  await contactlistPage.logout();

  const userIsLoggedOut = await loginPage.userIsLoggedOut();
  expect(userIsLoggedOut).toBeTruthy();
});
