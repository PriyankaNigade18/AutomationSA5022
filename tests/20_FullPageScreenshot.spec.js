import {test,expect} from "@playwright/test"

test("Test for screenshot",async({page})=>{

    await page.goto("https://www.amazon.in");

    await page.screenshot({path:'tests/Screenshots/fullPage.png',fullPage: true });

    await page.waitForTimeout(1500);
})
