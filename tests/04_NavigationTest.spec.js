
//import playwright module
import {test,expect} from "@playwright/test"


test("Test for Navigation in Playwright",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

     await page.waitForTimeout(1000);

    //open facebook application
    await page.goto("https://www.facebook.com/");

    await page.waitForTimeout(1000);

    //navigate back 
    await page.goBack();//google

     await page.waitForTimeout(1000);

    //navigate forward
    await page.goForward();//facebook

     await page.waitForTimeout(1000);
     
    //refresh page : reload()
    await page.reload();



    await page.waitForTimeout(2000);

})