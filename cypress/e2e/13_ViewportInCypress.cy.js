
/*
To customize browser window we have viewport in cypress
*/

describe("Test for Cypress Viewport",()=>{

it("Test For Viewport",()=>{

    //open application
    cy.visit("https://amazon.in");

    //viewport maximize:Control the size and orientation of the screen for your application.
    cy.viewport(1920,1080);

    cy.wait(2000);

    //minimize to small size
    cy.viewport(100,200);

 cy.wait(2000);


 //iphone

 cy.viewport("iphone-x");
 

})

})