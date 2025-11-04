
import {test,expect} from "@playwright/test"

test.describe("This is google suite",()=>{
//global instance of page
    let page;
    //pre-requisite:open google app
    test.beforeEach(async({context})=>{

            //create new page
            page=await context.newPage();
            await page.goto("https://www.google.com");
    })
    

test("Test for Google Title",async({})=>{

    let appTitle=await page.title();
    console.log("App title : "+appTitle);
    await expect(page).toHaveTitle("Google");
    console.log("Test Pass...Title matched!");

    
    

})

test("Test for Google search",async({})=>{

    await page.locator("#APjFqb").fill("java");
    await page.screenshot({ path: 'tests/Screenshots/googlepage.png'});

    await page.waitForTimeout(2000);
})



}
)