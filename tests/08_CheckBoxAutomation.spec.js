

import {test,expect} from "@playwright/test"

test("Test for Checkboxes",async({page})=>{
//open application
await page.goto("https://www.letskodeit.com/practice");

let allCheckboxes=await page.locator("//div[@id='checkbox-example-div']//fieldset//label//input");

await allCheckboxes.first().check();
await allCheckboxes.last().check();
await allCheckboxes.nth(1).check();



await page.waitForTimeout(2000);

})