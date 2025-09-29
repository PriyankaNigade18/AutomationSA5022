/*

Type casting:
==============
Conversion of one type of data into other type

Implicit casting
======================
Automatic conversion by js it is known as Type Cocercion

Explicit casting
===================
Forecefull conversion
Number(),String(),Boolean()


In js Only string ,number and boolean can converted
For type casting type should be compatible

*/
console.log("-----String conversion------");
/*
Whenever with string if you use (+) operator the then other data will change 
its type to string

*/

let s1="Hello"+10+20;//10 & 20 numbers coerced into String
console.log(s1);//Hello1020
console.log(typeof s1);//string

console.log(100+30+"Hi");//130Hi here 100+30=130 then 130number coerced into String
console.log(typeof(100+30+"Hi"));//string

console.log("Hi"+true);//true as boolean coerced into string
console.log(typeof("Hi"+true));

console.log("Hello"+"all");//Helloall

console.log("-----Number type-----");
/*
with string convertable data if you use arithmetic operators(-,*,/) then
string converts into number
*/

console.log("Hello"-100);//NaN
console.log("200"-100);//here "200" coerced into number 200-100=100
console.log("123"/0);//"123" coerced into number 123/0=infinity
console.log("10"*"80");//both string "10" & "80" coerced into number 10*80=800

console.log("--Explicit casting---");

//boolean to number
let a1=true;
console.log(Number(a1));//1

//Edge case
let a2="hello";
console.log(Number(a2));//NaN

let a3="89";
console.log(Number(a3));//89

//number to string
let num1=90;
console.log(num1+100);//190
console.log(typeof num1);//number
let numbertoString=String(num1);
console.log(typeof numbertoString);//string
console.log(numbertoString+100);//90100
/*
Scenario: test amount should be less than 10000
*/

let bill="Total amount is 5000";//String
//amount: string to number 
let amountInString=bill.split(" ")[3];
console.log(typeof amountInString);//string
console.log(amountInString);//"5000"

//string to number
let amount=Number(amountInString);

if(amount<10000)
{
    console.log("Amount is valid ...Test pass!");
    
}

/*
truthy
=======
Any true value in boolean context refer as truthy values
true,nonzero number,non empty string


falsy
=====
Any false value in boolean context refer as falsy values
false,0,null,undefined,empty string,NaN


*/
console.log("---Boolean-----");

let userName="Jay";
console.log(Boolean(userName));//true
console.log(Boolean(189));//true
console.log(Boolean(89.77));//true

console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false
console.log(Boolean(NaN));//false

console.log(Boolean("AD98"));
















