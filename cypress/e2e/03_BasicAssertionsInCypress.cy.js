/*

Assertion
================
Where we can validate current state of that application

Cypress Assertions
==========================
1.Implicit Assertion
-------------------------
Cypress support inbuilt assertion that is implicit & this defualt assertion cypress
should()
and()


2.Explict
----------------
expect():BDD
assert():TDD


*/


describe("This is suite for Basic Assertions",()=>{

    //pass
it("Test for Google title assertion with valid title",()=>{

    //open application
    cy.visit("https://www.google.com/");

    //get the title and assert it with valid title Google
    cy.title().should("eq","Google");

})

it("Test for Google application invalid title",()=>{
    //open application
    cy.visit("https://www.google.com/");

    //get the title and assert it with wrong expection
    cy.title().should("eq","GoogleApp");
})

it("Test for Google application url",()=>{
    //open application
    cy.visit("https://www.google.com/");

    //exact match for Url/title use: eq()
    cy.url().should("eq","https://www.google.com/");

    //partial match for url/title use include()
    cy.url().should("include","https");
    

})


})





