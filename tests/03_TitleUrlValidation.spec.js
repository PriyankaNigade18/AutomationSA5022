
//import playwright module
import {test,expect} from "@playwright/test"

test("Test for Google title",async({page})=>{

//open application: goto()
await page.goto("https://www.google.com");

//get the title :title() and store it into variable
let appTitle=await page.title();
console.log("Title is: "+appTitle);

//validation:Assertion help us to test current status of application: expect()
expect(appTitle).toEqual("Google");

await expect(page).toHaveTitle("Google");



await page.waitForTimeout(2000);
})