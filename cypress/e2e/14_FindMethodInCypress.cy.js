/*
find() can identify Decendent Dom element
Rule
-----------
This method applicable only with get(locator)
*/

describe("Test find()",()=>{

    it("Test for find()",()=>{

        //open application
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

        //get all links: cy.get("div.list-group>a")...13 links
        cy.get("div.list-group").find("a").each(($link)=>{
            //$link is variable
            cy.log("Text is: "+$link.text());

        })


    })
})