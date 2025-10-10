/*
Tags in Cypress
-----------------
tags you can apply for suite and test case

1.it.only
2.it.skip
*/


describe("This is suite1...",()=>{

    it("Test for Amazon application",()=>{
        //open application
        cy.visit("https://www.amazon.in");

    })

    it("Tets for CRM application",()=>{

        //open application
        cy.visit("https://automationplayground.com/crm/");

    })

    it("Test for Orangehrm application",()=>{
        //open application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })


})

//suite2
describe.only("This is suite2....",()=>{
    it("Test for Swaglab application",()=>{
    //open application
    cy.visit("https://www.saucedemo.com/v1/");

    })
})










