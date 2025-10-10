/*
spec file--->test suite(describe())--->testCases (it())--->automation script

Every cypress command starts with cy


/// <reference types="Cypress" />
*/


describe("This is testSuite1",()=>{


    it("This is testCase 1",()=>{
        cy.log("Test Case 1 is executing.....");
    })

    it("This is testCase 2",()=>{
        cy.log("Test Case 2 is executing.....");
    })

    it("This is testcase3",()=>{
        cy.log("TestCase 3 is running....")
    })
})






