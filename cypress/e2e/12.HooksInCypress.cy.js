/*
before()

after()

beforeEach()

afterEach()


*/



describe("Test for hooks",()=>{

//hooks
before(()=>{
cy.log("Before hook will execute only once before all the test cases....")
})

after(()=>{
    cy.log("After hook will execute only once after all the test cases.... ")
})


beforeEach(()=>{
    cy.log("BeforeEach will execute before every test case");
    //open application
cy.visit("https://automationplayground.com/crm/");

cy.contains("Sign In").should("be.visible").click();
})

afterEach(()=>{
    cy.log("AfterEach will execute after every test case");
    //get the url and print
    cy.url().then((appUrl)=>{

        cy.log("Url is: "+appUrl);
    })
})

it("Validate signin link",()=>{
// //open application
// cy.visit("https://automationplayground.com/crm/");

// cy.contains("Sign In").should("be.visible").click();

//assertion
cy.url().should("include","login");
cy.log("User navigated to login page");


})

it("Validate Login functionality",()=>{
//open application
//cy.visit("https://automationplayground.com/crm/");

//signIn
//cy.contains("Sign In").click();

//email
cy.get("#email-id").type("test@gmail.com");

//password
cy.get("#password").type("test123");

//submit
cy.get("#submit-id").click();

//assertion
cy.url().should("include","customers");
cy.log("Login completed!");
    
})

it("Validate signOut link",()=>{

    //cy.visit("https://automationplayground.com/crm/");

//signIn
//cy.contains("Sign In").click();

//email
cy.get("#email-id").type("test@gmail.com");

//password
cy.get("#password").type("test123");

//submit
cy.get("#submit-id").click();

//assertion
cy.url().should("include","customers");
cy.log("Login completed!");
    

//signout
cy.contains("Sign Out").click();
    
})




})





