/*
Function
-------------
group of statement we can run through function

1.Function declaration (older not recommended)
In modern js we use function expression
-------------------------------------------
2.Function Expression
    2.1. Anonymous function(function without name )
    2.2. Arrow function
*/

console.log("-----function declaration-------");

function greet()
{
    console.log("Hello All! Welcome to learn Javascript...");
    
}

//call function
greet();

console.log("-----Anonymous function-------");


let show=function()
{
console.log("This is Anonymous function calling....");

}

//function call
show();

console.log("-----Arrow function-------");


let display=()=>{console.log("This is arrow function is calling....");}

//calling function
display();