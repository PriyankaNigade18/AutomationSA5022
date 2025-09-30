/*
Call back function/Higher order function
---------------------------------------------
whenever we pass function itself as parameter to any other function
then that function known as call back function /higher order function

Purpose: 
to handle asynchronus data and
 for reusability we use call back function
*/


//executable function
function greet(name,func)//func=display=call back function
{
func(name);
}


function display(username)
{
    console.log("Hello "+username+" lets learn call back function");
    
}

//call
greet("Jay",display);

console.log("------------------------------");

function add(a,b)
{
console.log("Addition is: "+(a+b));

}
function sub(a,b)
{
console.log("Subtarction is: "+(a-b));

}
function mul(a,b)
{
console.log("Multiplication is: "+(a*b));

}
function div(a,b)
{
console.log("Division is: "+(a/b));

}
function mod(a,b)
{
console.log("Modulus is: "+(a%b));

}

//executable function
function calculate(num1,num2,func)
{
    func(num1,num2);

}


//call
calculate(10,200,add);

calculate(10,200,mul);
calculate(10,200,div);
calculate(10,200,sub);
calculate(10,200,mod);













