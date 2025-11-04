
import {test,expect} from "@playwright/test"
import { log } from "node:console";

test("Multiple elements for Google Search scenario using $$()",async({page})=>{

//open application
await page.goto("https://www.google.com/");

//search for keyword
await page.locator("#APjFqb").fill("Javascript");

//wait
await page.waitForTimeout(1500);

//get all options:$$() return array
let allOptions=await page.$$("(//ul[@class='G43f7e'])[1]//li");

console.log(await allOptions.length);

for(let ele of allOptions)
{
    console.log(await ele.innerText());
    
}

})


test("Multiple elements for Google Search scenario using all()",async({page})=>{

//open application
await page.goto("https://www.google.com/");

//search for keyword
await page.locator("#APjFqb").fill("playwright");

//wait
await page.waitForTimeout(1500);

//get all options:all() return array
let allOptions=await page.locator("(//ul[@class='G43f7e'])[1]//li").all();

console.log(await allOptions.length);

for(let ele of allOptions)
{
    console.log(await ele.innerText());
    
}

})



test.only("Multiple elements for Google Search scenario using count()",async({page})=>{

//open application
await page.goto("https://www.google.com/");

//search for keyword
await page.locator("#APjFqb").fill("playwright");

//wait
await page.waitForTimeout(1500);

let allOptions=await page.locator("(//ul[@class='G43f7e'])[1]//li");

//count() returns number of elements
let totalElements=await allOptions.count();
console.log("Total Options are: "+totalElements);//10

//simple for loop
for(let index=0;index<totalElements;index++)
{
    let option=await allOptions.nth(index);
    console.log(await option.innerText());
    
}



})
