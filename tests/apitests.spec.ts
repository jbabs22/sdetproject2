import { test, expect } from "@playwright/test";
import axios from 'axios';
import * as fs from 'node:fs';


// test data
const baseURL = 'https://jsonplaceholder.typicode.com';


// Describe is a Test Suite
test.describe.parallel('API Tests', () => {

    // Test is a Test Case
    test('GET Request- Assert Response Status(OK)', async ({ request }) => {
        const response = await request.get(`${baseURL}/posts/2`);

        // Assertion for Response Status Code
        expect(response.status()).toBe(200);
      });



      test('POST Request - Creating a Resource', async ({ request }) => {
        const response = await request.post(`${baseURL}/posts`, {
          data: {
            title: "New Title!",
            body: 'this is the Body!',
            userId: 10,
          }
        })
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(responseBody.title).toBe('New Title!');
        expect(responseBody.body).toBe('this is the Body!');
        expect(responseBody.userId).toBe(10);
        expect(responseBody.id).toBeTruthy();
      });


    

      test('Workflow (including manipulation) - Get Data, Reverse It, and Save as Artifact', async () => {

        // Collect data
        const response = await axios.get(`${baseURL}/posts`); 
        const posts: string[] = response.data;
    
        // Manipulate data (reversing the order)
        const reversedPosts = posts.reverse();
    
        // Save manipulated data as an artifact
        fs.writeFileSync('artifact.json', JSON.stringify(reversedPosts, null, 2));
    
      });


      test('Manipulation - Get Data, Extract Last 5 Posts, Reverse Results, and Save as an Artifact', async () => {

        // Collect data
        const response = await axios.get(`${baseURL}/posts`); 
        const posts: string[] = response.data;

        // Select the last 5 results
        const lastFivePosts = posts.slice(-5);

       // Manipulate data (reversing the order in this example)
        const reversedPosts = lastFivePosts.reverse();

        // Save manipulated data as an artifact
       fs.writeFileSync('artifactLast5.json', JSON.stringify(reversedPosts, null, 2));

      });
});
  



test.describe('Additional API Tests', () => {

  test('GET - Assert Response Status(Not Found)', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/invalid-post`);

    expect(response.status()).toBe(404);
  });


  test('GET - JSON Parsing', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/2`);
 
    expect(response.status()).toBe(200);

    const responseParsed = JSON.parse(await response.text());
    console.log(responseParsed);
  });


  test('GET - Simple Get Test - Retrieve Comments', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1/comments`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);

    const responseParsed = JSON.parse(await response.text());
    console.log(responseParsed);

  });

});