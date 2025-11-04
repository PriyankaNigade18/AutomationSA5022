
import {test,expect} from "@playwright/test"

test("Test for file upload",async({page})=>{

//open application
await page.goto("https://the-internet.herokuapp.com/upload");

//attached file
await page.locator("#file-upload").setInputFiles("tests/TestFiles/Appiumsetup.txt")

//upload file
await page.locator("#file-submit").click();

await page.waitForTimeout(1500);

let msg=await page.locator("//h3").textContent();
console.log(msg);


await page.waitForTimeout(2000);
})