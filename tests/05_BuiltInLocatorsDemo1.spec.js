/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test,expect} from "@playwright/test"


test("Test for Built In Locators in Playwright",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/");

//sign in link by getByRole locator
await page.getByRole('link',{name:'Sign In'}).click();

//enter email using getByPlaceholder()
await page.getByPlaceholder('Enter email').fill("test@gmail.com");

//enter password using getByPlaceholder()
await page.getByPlaceholder('Password').fill("test123");
await expect(page.getByPlaceholder('Password')).toHaveValue("test123");

//check the checkbox using getByLabel()
await page.getByLabel('Remember me').check();

//click on submit button getByRole()
await page.getByRole('button',{name:'Submit'}).click();

//get the text of message and print it in console
//to get the element text : textContent() like getText() in selenium
let ele=await page.getByText('Our Happy Customers');
let text1=await ele.textContent();
console.log("Text is: "+text1);
//assertion
await expect(ele).toBeVisible();



await page.waitForTimeout(2500);

})