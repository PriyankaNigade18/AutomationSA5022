

/*
Assertion
---------------
Is way wher we can test current status of application

In Playwright two types ofassertion support
------------------------------------
1.Hard Assertion
--------------------
While execution if assertion fail then test will stop on that fail line and
assertionError will throw

expect()

2.Soft Assertion
--------------------
While execution if assertion fail then test will continue & for that failed line
assertionError will throw

expect.soft()

*/
import {test,expect} from "@playwright/test"

test("Test for Soft Assertion",async({page})=>{

//open application
await page.goto("https://automationplayground.com/crm/login.html");

//validate title
await expect.soft(page).toHaveTitle("Customer Service - Login");//full title
await expect.soft(page).toHaveTitle(/Login/);//partial match

//validate url
await expect.soft(page).toHaveURL("https://automationplayground.com/crm/login.html")
await expect.soft(page).toHaveURL(/crm1234/);//assertion error test will continue

//email ele
let emailEle=await page.locator("#email-id");

//enable
await expect.soft(emailEle).toBeEnabled();

//visible
await expect.soft(emailEle).toBeVisible();

//editable
await expect.soft(emailEle).toBeEditable();

//fill the value
emailEle.fill("test@gmail.com");

//value
await expect(emailEle).toHaveValue("test@gmail.com");


/*
scenario: checkbox validation
-----------------------------------
Initially check box should be unchecked
after click it should be checked
*/


let checkbox=await page.locator("#remember");

await expect.soft(checkbox).not.toBeChecked();//checkbox should be unchecked
checkbox.click()
await expect.soft(checkbox).toBeChecked();//after click it should be checked

await page.waitForTimeout(2000);
})