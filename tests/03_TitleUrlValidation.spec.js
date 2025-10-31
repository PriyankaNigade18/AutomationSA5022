
//import playwright module
import {test,expect} from "@playwright/test"
import { clear } from "console";

test("Test for Google title",async({page})=>{

//open application: goto()
await page.goto("https://www.google.com/");

//get the title :title() and store it into variable
let appTitle=await page.title();
console.log("Title is: "+appTitle);

//validation:Assertion help us to test current status of application: expect()
//expect(appTitle).toEqual("GoogleApp");

await expect(page).toHaveTitle("Google");

//get the url and store into variable:url()
let appUrl=page.url();
console.log("Application url is: "+appUrl);



//validate url with full match based on variable
expect(appUrl).toEqual("https://www.google.com/");

// partial match
expect(appUrl).toContain("https");


//page based assertion
await expect(page).toHaveURL("https://www.google.com/");//exact-full match

//partial match /partail value/
await expect(page).toHaveURL(/https/);//partail match




await page.waitForTimeout(2000);
})