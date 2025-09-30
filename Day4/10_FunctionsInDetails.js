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

function without and with parameters
function with return keyword

return keyword
==============
this keyword we use whenever we wanted return output/result from the function
return keyword always return result to calling function

Call back function/Higher order function
---------------------------------------------
whenever we pass function itself as parameter to any other function
then that function known as call back function /higher order function

Purpose: 
to handle asynchronus data and
 for reusability we use call back function


*/
console.log("------function declaration without parameter---------");

function test1()//o parameter function
{
let a=100,b=20;
console.log("addition is: "+(a+b));

}

//call
test1();

console.log("------function declaration with parameter---------");

function test2(id,name)//2 parameters
{
console.log("Username is: "+name);
console.log("User id is: "+id);
}

//call (real data:arguments to this function)

test2(101,"Rajesh");

console.log("------function declaration with parameter and return keyword--------");

function test3(num1,num2)
{
    return num1+num2;
}

//call
let res=test3(10,20);
console.log("Addition is: "+res);

console.log("--------Anonymous function without parameter-----");

let test4=function()
    {
    console.log("Anonymous function is calling without parameter...");
    
    }

    //call
    test4();

   console.log("--------Anonymous function with parameter-----");

   let test5=function(id)//1 parameter 
        {
        console.log("Anonymous function is calling with parameter id..."+id);

        }

//call
test5(201);


console.log("--------Anonymous function with parameter and  with return keyword-----");


let test6=function(num1,num2)
    {
    return num1*num2;
   }

   //call
  let mul= test6(10,10);
  console.log("Multiplication is: "+mul);
  
console.log("--------Arrow function without parameter-----");
let test7=()=>{
    console.log("Arrow function is calling....");
    
    }


//call
test7();

console.log("--------Arrow function with parameter-----");

let test8=(bname,version)=>{
    console.log("Browser name is: "+bname);
    console.log("Browser version is: "+version);
    
}


//call
test8("Chrome",120);

console.log("--------Arrow function with parameter and return -----");


let test9=(info)=>{
                    return info;
                  }

//call
console.log("info is: "+test9("Cypress is webui automation tool"));











