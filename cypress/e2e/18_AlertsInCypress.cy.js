

describe("Test for different type of Alerts",()=>{


    it("Test for simple alert with Ok button",()=>{

        //open application
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        //to open alert click on 1st button
        cy.get("button").first().click();

        /*
        On click alert will open and handle automatically by cypress
        To validation alert we have to write cypress event
        Cypress handle alert by clicking on Ok button

        */
       //validate alert event
       cy.on("window:alert",(alt1)=>{

        expect(alt1).to.eq("I am a JS Alert");
        
       })

        //assertion
        cy.get("#result").should("have.text","You successfully clicked an alert");

        
    })


    it("Test for Confirmation alert with Ok/cancel button",()=>{

        //open application
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        //to open alert click on 1st button
        cy.get("button").eq(1).click();

        /*
        On click alert will open and handle automatically by cypress
        To validation alert we have to write cypress event
        Cypress handle alert by clicking on Ok button

        */
      

        //assertion
        //cy.get("#result").should("have.text","You clicked: Ok");

        //click on cancel
        cy.on("window:confirm",()=>false);

        //assertion
        cy.get("#result").should("have.text","You clicked: Cancel");

        
    })


    it.only("Test for prompt alert with Ok/cancel button",()=>{

        //open application
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        //before open alert send the prompt
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Bye Everyone!");
        })


        //to open alert click on 1st button
        cy.get("button").last().click();

        //assert
        cy.get("#result").should("have.text","You entered: Bye Everyone!");


        
    })


})