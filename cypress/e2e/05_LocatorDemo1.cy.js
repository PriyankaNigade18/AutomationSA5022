/*
To identify any webelement automation tool use locators

What is Locator?
----------------
Locator is Address of WebElement from webpage

To identify any webelement with locator
----------------------------------
cy.get(locator(tagname/cssSelector))

Cypress Locators
---------------------
Cypress support 3 locators strategy

1.contains()     [like getText() of Selenium]
==================================================
To identify any webelement based on visible text of that element we use 
cy.contains()

Syntax:
-----------
cy.contains("visible text of element")

<div id="" name="">Cart</div>
visible text: Cart

<a href="">Login</a>
visible text: Login

2.tagname
=============================
Cypress identify element by its tagname

Syntax:
--------------
cy.get("tagname");

example:
-----------------
<button id=""/>
cy.get("button").click();

Scenarios:
----------------
Number of images
Number of links
Number of buttons....etc

3.CssSelector(Default)
===========================
-CssSeelctor is locator to identify webelement from webpage based on css property
-CssSelector can travel from parent tag to child tag
-CssSelector is faster than xpath

1.tagname with id
-----------------------
Syntax:
------------
tagname#id

Example:
-----------
<a id="SignIn">

a#SignIn

2.tagname with attribute
--------------------------
Syntax:
-------------
tagname[attribute='value']

Example
-------------
a[name='sign-in-link']

3.tagname with className
-------------------------------
Syntax:
------------
tagname.className

Example
-------------
a.nav-link


*: contains(partial match)
^:startswith
$"endsWith"



//parent to child navigation
-------------------------------
Syntax:
------------
tagname[attribut='value']>child elementlocator

//child or cssSelectorwith indexing
------------------------------------
Syntax:
------------
tagname[attribut='value']:nth-child(indexing)

4:Xpath(In cypress its deprecated)
-----------------------------


*/

describe("This is suite of examples for Locators in Cypress",()=>{


it("Test CRM login functionality using locators",()=>{

//open application
cy.visit("https://automationplayground.com/crm/");

cy.screenshot("Homepage");

//click on Sign in link using contains(): based on visible text of element it identify element
cy.contains("Sign In").click();

cy.screenshot("loginPage");

//click on Sign in link using cssSelector using id
//cy.get("a#SignIn").click();

//enter email id into login page : cssSelector with id
cy.get("input#email-id").type("test123@gmail.com");

//enter password using cssSlector with attribute
cy.get("input[placeholder='Password']").type("test123");

cy.screenshot("credentails");
//checkbox/radiobutton--->click() check() and uncheck() using cssSelector with id
cy.get("input#remember").click();

//this is like Thread.sleep() in selenium : to provide pause in between step
 cy.wait(1500);

 //uncheck the checkbox
cy.get("input#remember").uncheck();

cy.wait(1500);

//check the checkbox
cy.get("input#remember").check();

//submit button using cssSelector with tagname
//cy.get("button").click();

//submit button using CssSelector with className
//cy.get("button.btn").click();
cy.get("button.btn.btn-default.btn-primary").click();

//validation
cy.url().should("include","customers");
cy.log("Login pass...User Navigated to customers page!");

})








})