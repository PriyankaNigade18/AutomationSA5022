/*
Dropdown Automation
===========================
types
--------
1.Dropdown design with <select> tag
select()

we can select dropdown options based on visible text,index and value

2.Dropdown design as autosuggetion/bootstrap
-----------------------------
Locators


*/


describe("This is suite for Dropdown automation",()=>{


it("Test for Select tag based dropdown",()=>{

    //open application
    cy.visit("https://www.amazon.in/");

    //identify dropdown:Select an <option> with specific text, value, or index within a <select>.
    //select by index
    cy.get("select#searchDropdownBox").select(3,{force: true});//as index 3

    cy.wait(2000);

    //select by visible text
    cy.get("select#searchDropdownBox").select("Movies & TV Shows",{force:true});

    cy.wait(2000);
    //select by value
    cy.get("select#searchDropdownBox").select("search-alias=toys",{force:true});

})

it.only("Test for Bootstrap/autosuggestion dropdown automation",()=>{

    //open application
    cy.visit("https://www.goibibo.com/flights");

    //close the popup
    cy.get("span.icClose").click();

    cy.get("#fromCity").click();

    cy.get("input[placeholder='From']").type("Pune");


    //exact match
    cy.get("ul.react-autosuggest__suggestions-list>li>div>div>p>span.makeFlex").each(($option)=>{

        cy.log("Text is: "+$option.text());
        
    })

})



})


