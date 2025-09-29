/*

Variable:
------------
Name of storage location where we can store values

 keywords we use in Js to declare variable
--------------------------------------------
1.var(older & not recommended by js)

for morden js we use let and const
--------------------------
2.let 
3.const

1.var(older)
--------------
scope: Global and Functional
Redeclaration of var is allowed
hoisting is allowed for var


2.let
-----------------
Scope: Block, functional and Global
Redeclaration is not allowed
It is mutable

3.const(like final keyword in java)
----------------
Scope: Block, functional and Global
Redeclaration is not allowed
It is Immutable

what is functional scope:(local)
-------------------------------
If variable declare inside function then variable will get functional scope

What is Block scope
----------------------------
Any variable declare within block (if-else/for/switchcase)
only let and const type allowed block scope



Hoisting
-----------------
Hoisting is the behavior where you can able to access variable before even declaring it.

Rule:
--------
hoisting is allowed for var and functional declaration.

only declaration get hoisted not initialization
and for let and const it is not applicable same like var
*/
//Global scope variable we can access like public data
console.log("----Global Scope variables----");

var userName="Hiteshi";
let location="US";
const email="hiteshi@gmail.com";

console.log("User name is: "+userName);
console.log("Location is: "+location);
console.log("email is: "+email);



function show()
{
    console.log("---Calling global data from function-----");
    
console.log("User name is: "+userName);
console.log("Location is: "+location);
console.log("email is: "+email);
}

//calling
show();

console.log("-----Functional scope data(local)-----");
/*
Any data you declared inside function can access through the function
*/

function display()
{
        var env="QA";
        let tool="Selenium";
        const orgName="HSBC";
        console.log("Testing env: "+env);
        console.log("Tool name: "+tool);
        console.log("OrgName is: "+orgName);
        
}

//call function
display();

console.log("----Calling data outside that function-----");

//console.log("Testing env: "+env);//ReferenceError: env is not defined
//console.log("Tool name: "+tool);//ReferenceError: tool is not defined
//console.log("OrgName is: "+orgName);//ReferenceError: orgName is not defined

console.log("--------block scope variable------");

//Block scope is only applicable for let and const 
if(true)
{
    let browserVersion=114;
    const browserName="chrome";
console.log("Browser version: "+browserVersion);
console.log("Broswer name : "+browserName);

}

console.log("----Calling data outside block-----");

//console.log("Browser version: "+browserVersion);//ReferenceError: browserVersion is not defined
//console.log("Broswer name : "+browserName);//ReferenceError: browserName is not defined

console.log("----Redeclaration point-----");
/*
Redeclaration is allowed for var type but not allowed for let and const
*/

var automationTool="Selenium";
var automationTool="cypress";
var automationTool=123456;
automationTool="Playwight";//reassignment
console.log(automationTool);
//Cannot redeclare block-scoped variable 'book'.
//let varibale redelcaration not allowed but reassignment allowed
let book="Software testing";
book="Api testing";
console.log(book);


//let book="Software testing";//Cannot redeclare block-scoped variable 'book'.

//const variable redelcaration and  reassignment not allowed

const pi=3.14;
//pi=89809;//TypeError: Assignment to constant variable.
//const pi=3.14;//Cannot redeclare block-scoped variable 'pi'

console.log("---------------Hoisting--------------------");
//Hoisting is the behavior where you can able to access variable before even declaring it.
//Hoisting applicable for function declaration not for express

console.log(studentName);//undefined

var studentName;

console.log(studentName);//undefined

/*
console.log(colorName);//error:ReferenceError: Cannot access 'colorName' before initialization

let colorName;

console.log(colorName);//undefined

*/


//console.log(pi2);//Error:ReferenceError: Cannot access 'pi2' before initialization
const pi2=3.14;
console.log(pi2);//3.14


console.log("--------hoisting for function--------------");

test1();

function test1()
{
    console.log("test1 is calling.....");
    
}


//test1();

//test2();//ReferenceError: Cannot access 'test2' before initialization

//arrow
let test2=()=>{
    console.log("Arrow function is calling!.....");
    
}

//test2();


