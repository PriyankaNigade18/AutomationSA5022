
import {test,expect} from "@playwright/test"

test.describe.serial("This is test suite",()=>{


//hooks
test.beforeAll(()=>{
    console.log("Before all executes before all test");
    
})
test.afterAll(()=>{
    console.log("After all executes after all test");
    
})

test.beforeEach(()=>{
    console.log("Before each executes before every test");
    
})
test.afterEach(()=>{
    console.log("After each executes after every test");
    
})


test("This is first test",()=>{
    console.log("This is test1");
    
})

test("This is second test",()=>{
    console.log("This is test2");
    
})
test("This is third test",()=>{
    console.log("This is test3");
    
})




})