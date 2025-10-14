/*

    Cypress variable
    ====================
    To interact title,url or any single webElement use then()
    To interact multiple webelements use each()

    To get the title and store it into variable
    ===============================================
    Syntax:
    =============

    cy.title().then((variableName)=>{
        cy.log("Title is: "+variableName)

        })

    To get the url and store it into variable
    =================================================

    Syntax:
    =============

    cy.url().then((variableName)=>{
        cy.log("Title is: "+variableName)

        })

    To get the WebElement and store it into variable
    =====================================================

    While working with webelement add $sign before variable
    Syntax:
    ===========
    cy.get(locator).then(($variableName)=>{
        
        //To get the test of element: text()
        ----------------------------------------
        cy.log("Text is: "+$variableName.text())

        To perform action on WebElement use wrap()then perform action
        -------------------------------------------------
        cy.wrap($variableName).click().type("data");
        
        })



*/

describe("Test for Cypress variables",()=>{


it("Test for application title and url",()=>{

    //open app
    cy.visit("https://www.google.com");


    //get the title and print it
    cy.log("Title is: "+cy.title());

    //to get the title and print in console
    cy.title().then((appTitle)=>{//appTitle is variable name which holds actual title
        cy.log("Title is: "+appTitle);

    })

    //url
    cy.log("Url is: "+cy.url());


    //to get the url and print use variable

    cy.url().then((appUrl)=>{//appUrl is variable which holds current page url

        //validate url should have https protocol
        if(appUrl.includes("https"))
        {
            cy.log("Valid Url is: "+appUrl)
        }

    })

    
    })


it.only("Test for webelement with variables",()=>{

        //open application
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

        //enter email id
        cy.get("input#input-email").then(($emailEle)=>{//$emailEle is variable for that webelement
            //get the text
            cy.log("Text is: "+$emailEle.text());


            //click
            cy.wrap($emailEle).click();

            //type
            cy.wrap($emailEle).type("test24@gmail.com");
            


        })





})

})

