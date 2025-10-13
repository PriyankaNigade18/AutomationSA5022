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

describe("This is suite for Locator Demo2",()=>{


it("Test for Orangehrm login and logout",()=>{

    //open application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //username:CssSelector with attribute
    cy.get("input[name='username']").type("Admin");

    //password:CssSelector with attribute
    cy.get("input[type='password']").type("admin123");
    
    //login button:CssSelector with classname
    cy.get("button.oxd-button").click();

    //assertion on url
    cy.url().should("include","dashboard");
    cy.log("Login pass..User Navigated to Dashboard page");

    //logout
    cy.get("i.oxd-userdropdown-icon").click();

    //click on logout
    //cy.contains("Logout").click();

    //parent child
    cy.get("ul.oxd-dropdown-menu>li:nth-child(4)>a").click();

    //assertion
    cy.url().should("include","login");
    


})




})





