
describe("Test file upload scenario",()=>{


it("Test for File Upload",()=>{

    //open application
    cy.visit("https://the-internet.herokuapp.com/upload");

    //select file
    cy.get("#file-upload").selectFile("cypress/fixtures/Appiumsetup.txt");

    //upload
    cy.get("#file-submit").click();

    //assertion
    cy.get("h3").should("have.text","File Uploaded!");
    cy.log("File uploaded......!");
})

})