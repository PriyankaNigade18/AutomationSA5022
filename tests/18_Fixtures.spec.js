

import {test,expect} from '@playwright/test'

//browser-->context--->newPage
test("Test fixtures",async({browser})=>{

    //create context from browser
let context1=await browser.newContext();

//from context1 open new tab
let page1=await context1.newPage();
await page1.goto("https://www.google.com");

let page2=await context1.newPage();
await page2.goto("https://www.amazon.in");


await page1.waitForTimeout(2000);

})


//context--->newPage
test.only("Test fixtures with context",async({context})=>{

    //create context from browser
//let context1=await browser.newContext();

//from context1 open new tab
let page1=await context.newPage();
await page1.goto("https://www.google.com");

let page2=await context.newPage();
await page2.goto("https://www.amazon.in");


await page1.waitForTimeout(2000);

})