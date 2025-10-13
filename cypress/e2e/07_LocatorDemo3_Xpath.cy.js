/*

Xpath
============
Path of element from html or xml page
xpath identify elements from DOM

Types:
===========
1.Absolute xpath(full xpath)
------------------
- identify element from root node<html>
- starts with '/'
/html/body/div[2]/div/div/div/div[2]/div/form/div[1]/input

2.Relative Xpath(partial xpath)
------------------------------
- identify element from relative property of that element
- starts with '//'

//*[@id="input-email"]

Syntax:
--------------
//tagname[@attribute='value']


In cypress to use xpath locator
----------------------------
cy.xpath("xpath of element");
*/

describe("Test for xpath Locator",()=>{

it("Test for Open cart application login using xpath",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email
    cy.xpath("//input[@id='input-email']").type("test24@gmail.com");

    //password
    cy.xpath("//input[@placeholder='Password']").type("test123");


    //login
    cy.xpath("//input[@value='Login']").click();






})




})









