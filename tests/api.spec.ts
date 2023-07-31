import { test, expect } from "@playwright/test";

const baseURL = "https://thinking-tester-contact-list.herokuapp.com";

test("GET - Contact List - Assert Response Status", async ({ request }) => {
  const response = await request.get(`${baseURL}/contacts`);

  // Assertion for Response Status Code
  expect(response.status()).toBe(200);
});

test("GET - Contact List - Assert Response Status: Intentionally Failing", async ({
  request,
}) => {
  const response = await request.get(`${baseURL}/contacts`);

  // Assertion for Response Status Code
  expect(response.status()).toBe(201);
});

// bearertoken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlMTY0MzNlOGYyZjAwMTNmOWM1N2IiLCJpYXQiOjE2OTA1NTQ4NTR9.4viRM_7d6qj4HgeIKZZ2o_GQKA0SFBW1eSDcqsXqr9w

// Resource for Bearer Token - https://playwright.dev/docs/auth
