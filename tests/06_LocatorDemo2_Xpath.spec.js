/*
Playwright support locators to identify webelements
1.Using Built In Locators
2.Using xpath
3.Using cssSelector(id,classname,attribute)

what is locator?
---------------
It is address of webelement from webpage

What is Xpath?
-------------------
It is path of the exlement form Html or Xml page
Xpath identify element from DOM


Types Of xpath
----------------
1.Absolute xpath
----------------------
- it identify element form root node
- it starts '/'


2.Relative xpath
-----------------------
- It identify element form relative property of ele/node
- It starts with '//'

Syntax:
===================
//tagname[@attribute='value'];

Xpath with indexing
===================
Syntax:
=============
(xpath)[index]


xpathMethods
============
1.text():
--------------------
Sytax:
----------
//tagname[text()='visible text']
for visible text use text() but text() never ignore whitespace so 
if text is present with white space this is not suitable


2.normalize-space():
------------------------
Syntax:
------------
//tagname[normalize-space()='visible text']
we can use this method for visible text along with space 
it is acting like trim() of String in java/js

3.contains():partial match
-----------------
Syntax:
---------------
//tagname[contains(@attribute,'partial value')]
or
//tagname[contains(text(),'partial text')]

4.startsWith():prefix value
------------------------------
Syntax:
---------------
//tagname[starts-with(@attribute,'partial value')]
or
//tagname[starts-with(text(),'partial text')]

-============================================
Dynamic webelement:Xpath Axies
-------------------------------
following
------------
//tagname[@attribute='value']//following::tagname of element

preceding
--------------
//tagname[@attribute='value']//preceding::tagname of element

#To identify element we use locator(xpath/cssselector)
page.locator('xpath')

*/


import {test,expect} from "@playwright/test"
import { log } from "node:console";

test("Test for google search with keyword",async({page})=>{

    //open application
    await page.goto("https://www.google.com/");

    //Identify element + perform Action
    //enter java keyword in search box:xpath
    await page.locator("//textarea[@id='APjFqb']").fill("Java");

    //enter java keyword in search box:cssSelector with id
    //await page.locator("textarea#APjFqb").fill("Testng");

    //from page do action and pass locator in action command
    //await page.fill('textarea#APjFqb','cypress');



    await page.waitForTimeout(2000);

})

test("Test for SwagLab login functionality",async({page})=>{

//open application
await page.goto("https://www.saucedemo.com/");

//username
await page.locator("//input[@name='user-name']").fill("standard_user");

//password
await page.locator("//input[@type='password']").fill("secret_sauce");

//login button
await page.locator("//input[@value='Login']").click();

//assertion on next page url
await expect(page).toHaveURL(/inventory/);
let appUrl=await page.url();
console.log("Application url is: "+appUrl);

await page.waitForTimeout(2000);
})

test.only("Test for Xpath Methods",async({page})=>{

//open application
await page.goto("https://www.amazon.in/");

await page.waitForTimeout(1500);

//click on Mobiles:xpath with text()
await page.locator("//a[text()='Mobiles']").click();

//assert
await expect(page).toHaveURL(/phones/);
console.log("Mobiles page open.....");

//click on CartL:normalize-space with indexing
await page.locator("(//span[normalize-space()='Cart'])[2]").click();
let cartText=await page.locator("(//h3)[1]").textContent();
console.log("Cart Text is: "+cartText);

//xpath with contains():partial match
//search for watch
let searchEle=await page.locator("//input[contains(@id,'searchtext')]");
searchEle.fill('watch');
//keyboard action
searchEle.press('Enter');

await page.waitForTimeout(1500);

//xpath with starts-with
let searchEle2=await page.locator("//input[starts-with(@id,'twotab')]")
searchEle2.clear();
searchEle2.fill("bags");
searchEle2.press('Enter');



//xpath axies
//scenario: click on Sell which is after searchbox
await page.locator("//input[starts-with(@id,'twotab')]//following::a[text()='Sell']").click();


//scenario: get the text of element which is before searchbox
let text=await page.locator("//input[starts-with(@id,'twotab')]//preceding::span[normalize-space()='Update location']").textContent();
console.log(text);

await page.waitForTimeout(2000);


})



