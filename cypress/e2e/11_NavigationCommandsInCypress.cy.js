/*
Navigation in cypress
===================
1.cy.go("back"/"forward")
2.cy.reload():refresh the page
*/

describe("Test for Nagigation commands in Cypress",()=>{


    it("Test for Amazon application Navigation",()=>{

        //open application
        cy.visit("https://www.amazon.in/");

        //home page title
        cy.title().then((appTitle)=>{
            cy.log("Titile is: "+appTitle);
        })

        //click on mobiles page
        cy.contains("Mobiles").click();

        //title of mobiles page
        cy.title().then((appTitle)=>{
            cy.log("Titile is: "+appTitle);
        })



        //come back to home page
        cy.go("back");

        //2sec pause
        cy.wait(2000);

        //come forward to mobiles page
        cy.go("forward");

        //refresh the page reload()
        cy.reload();


    })


})