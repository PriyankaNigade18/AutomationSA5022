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
1.text()
2.normalize-space()
3.contains()
4.startsWith()

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






