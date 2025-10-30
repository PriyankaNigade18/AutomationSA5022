

/*synchronus: one task at a time execution
console.log("Program started..................");

for(let i=1;i<=10;i++)
{
    console.log("Hi");
    
}


console.log("Program ends..................");
*/

/*Asynchronus: paralle run: all tast executes at a time

console.log("program started...........");

setTimeout(()=>{
console.log("Running using timeout()......");
},3000);

console.log("program ends...........");
*/

console.log("---------------------------------");

/*
When any function returns promise handle it using async function and
await keyword
*/
//api test

// let response=fetch("https://api.restful-api.dev/objects/7");
// console.log(response);//Promise { <pending> }

/*
//handling solution
let test1=async function()
{
let response=await fetch("https://api.restful-api.dev/objects/7");
console.log(response);
}

//calling
test1();

*/


console.log("-------------------------------------------");

//Promise is Js Object: pending,resolve, reject
//return promise
function pizzaMaking()
{
    return new Promise((resolve)=>{

        setTimeout(() => {
            resolve("Pizz will ready after 4 sec");
               }, 4000);
    })

}

async function orderPizza()
{
    console.log("First Order Pizza.....");
    console.log("Waiting for order");
    //return promise
    let result=await pizzaMaking();
    console.log(result);
    

}

//calling
orderPizza();









