

import {test,expect} from "@playwright/test"

test("Test for Autosuggestion,Javascript,Bootstrap",async({page})=>{

//open application
await page.goto("https://www.booking.com/");

await page.getByRole('button', { name: 'Dismiss sign-in info.' }).click();

let fromEle=await page.getByPlaceholder("Where are you going?");
await fromEle.click();
await fromEle.fill("India");


//get all options
let allOptions=await page.locator("//ul[@role='group']//li//div[@class='b08850ce41 d704c15739']").all();

console.log("Total Options are: "+allOptions.length);

for(let ele of allOptions)
{
    console.log(await ele.textContent());
    
}



await page.waitForTimeout(2000);
})