

describe("Test for Cypress variables",()=>{


it("Test for application title",()=>{

    //open app
    cy.visit("https://www.google.com");


    //get the title and print it
    cy.log("Title is: "+cy.title());
})



})