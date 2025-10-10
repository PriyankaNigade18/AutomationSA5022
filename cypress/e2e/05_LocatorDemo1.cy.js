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






*/