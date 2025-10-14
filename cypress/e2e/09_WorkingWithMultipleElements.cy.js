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


describe("Test for multiple webelements",()=>{


    it("Test for Munu options from Openacart application",()=>{

        //open application
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

        //get all option links: total links should be 13
        cy.get("div.list-group>a").should("have.length",13);
        cy.log("Total links are matched! Count is 13");

        //print every link text into console
        cy.get("div.list-group>a").each(($link)=>{//$link is variable name


                //text of every link:text()
                cy.log("Text is: "+$link.text());

                //to get href attribute value:attr('attribute name')
                cy.log("Href value is: "+$link.attr("href"));

                //confirm for Forgotten Password and do click

                if($link.text().includes("Forgotten Password"))
                {
                   cy.wrap($link).click();

                }

        })


    })



//testcase2
it.only("Test for google search scenario",()=>{


    //opena application
    cy.visit("https://www.google.com");

    //search for Jenkins
    cy.get("textarea#APjFqb").type("Jenkins");

    //list of options 
    cy.get("ul.G43f7e>li").should("have.length",10);

    cy.get("ul.G43f7e>li").each(($option)=>{//$option is variable 

        cy.log("Text is: "+$option.text());
    
    })






})







})
