/*
Assertions help to validate current state of application
Cypress support two types
------------------------------
1.Implicit(Inbuilt)
-----------------------
should()
and()

2.Explicit
-------------------
1.expect(): BDD
2.assert(): TDD



*/

describe("Test cypress assertions",()=>{


it("Test for Implicit assertion",()=>{


//open application
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


//title valiadation
cy.title().should("eq","OrangeHRM");//exact match for title
cy.title().should("contain","Orange")//partial match
cy.title().should("include","HRM");//partial match

//url validation
cy.url().should("include","auth");//parial url test

//webelement is visible?
cy.get("input[name='username']").should("be.visible");

//webelement is enabled?
cy.get("input[name='username']").should("be.enabled");

//and():applicable for multiple assertions on same element
cy.get("input[name='username']").should("be.visible").and("be.enabled").type("Priyanka").and("have.value","Priyanka");


//to validate text
cy.get("h5").should("have.text","Login");

})


it("Test for Explicit Assertion in Cypress",()=>{

    //open application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    cy.get("input[name='username']").type("Jay");

    //for explicit assertion use cypress variable
    //enter username and validate same
    cy.get("input[name='username']").then(($unEle)=>{

        //get the current value of element:val()
       let username=$unEle.val();

       //using expect():BDD
       expect(username).to.eq("Jay");
       cy.log("Assertion using expect() is done value matched!")

       //using assert():TDD
        assert.equal(username,"Jay");
        cy.log("Assertion using assert() is done value matched!")



   })


   


})


/*Assignment On Assertion
-------------------------------
Navigate to https://the-internet.herokuapp.com/checkboxes application and 
test for current status of checkboxes
1.checkbox 1 should be unchecked
2.checkbox 2 should be checked

*/


it.only("Test for checkbox status",()=>{

    //open application
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    //checkbox 1 should be unchecked
    /**
     * first() last() eq(index)
     */

    cy.get("input[type='checkbox']").first().should("not.be.checked");


    //checkbox 2 should be checked
    cy.get("input[type='checkbox']").last().should("be.checked");   

})






})






