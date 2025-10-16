

describe("Tets for multiple checkboxes",()=>{

it("Test for checkbox interaction",()=>{

    //open application
    cy.visit("https://www.letskodeit.com/practice");

    //3 checkboxes should be available
    cy.get("fieldset>label>input[type='checkbox']").should("have.length",3);

    //click on first 
    cy.get("fieldset>label>input[type='checkbox']").first().click();

    //click last
    cy.get("fieldset>label>input[type='checkbox']").last().click();

    //click on middle
    cy.get("fieldset>label>input[type='checkbox']").eq(1).click();


})




})