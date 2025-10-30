

//import playwright module
import {test} from "@playwright/test"

test("Test for Google application launch",async({page})=>{

    //open application:goto()
   await page.goto("https://www.google.com");


   await page.waitForTimeout(2000);



})