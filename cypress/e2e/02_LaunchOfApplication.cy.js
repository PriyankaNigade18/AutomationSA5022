/*


To open any webapplication
-----------------------------
cy.visit(url)

To get the title of application
-----------------------------------
cy.title()

To get the currenturl of application
-------------------------------------
cy.url()

*/

describe("Test for Launching web application",()=>{

    it("Test for launching Google application",()=>{

        //open any webapplication
        cy.visit("https://www.google.com");
        cy.log("Google application open!");

        //To get the title
        cy.log("Title is: "+cy.title());
        cy.log("Url is: "+cy.url());
    })

    it("Test for launching amazon application",()=>{

        //open application
        cy.visit("https://www.amazon.in");
        cy.log("Amazon application open!");
    })



})


