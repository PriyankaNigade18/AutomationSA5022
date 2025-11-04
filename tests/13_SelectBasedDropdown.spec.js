
/*
Any select tag based dropdown we can automate with SelectOption()
1.visible text
2.label
3.value
4.index
*/
import {test,expect} from "@playwright/test"

test("Test for Select based dropdown",async({page})=>{

    //open appliaction
    await page.goto("https://www.amazon.in/");

    //visible text
    await page.locator("#searchDropdownBox").selectOption("Books");

    await page.waitForTimeout(1500);
    //label
    await page.locator("#searchDropdownBox").selectOption({label:'Gift Cards'});
 await page.waitForTimeout(1500);

    //value
    await page.locator("#searchDropdownBox").selectOption({value:'search-alias=popular'});//music
 await page.waitForTimeout(1500);
 
    //index
    await page.locator("#searchDropdownBox").selectOption({index:4});//amazon fresh

    await page.waitForTimeout(2000);

})