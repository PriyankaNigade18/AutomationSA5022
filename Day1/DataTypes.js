/*

Variable: 
It is name of storage where we can store data

DataType:
It is required to define what type of data we stored into variable

In javascript language type of data it is not required to define as js it is dynalic type language

Syntax to declare variable in js
==============================
keyword variablename=value;

which keyword we used in js to store variable
------------------------------------------------
var, let(mutable) and const (immutable)

In modern js we needed to use only let and const

Examples:
------------
let username="Jay";
let id=101;

const pi=3.14;
const orgName="StarAgile";

Primitive data types(7)
-------------------------
1.Number
2.Boolean
3.String
4.Undefined
5.Null
6.BigInt(NA)
7.Symbol(NA)


Non Primitive data types
---------------------------
Object
Class
Array

typeOf(): this is operator which help you to get the data type for
stored value from variable

Javascript is loosely coupled language so no need to declare data type for any variable

*/

console.log("-------Number Data type------");
//any positive/negative/floating point number if Number type in js

let num1=190;
console.log("Number1 is: "+num1);//190
console.log("Type is: "+typeof(num1));//number


let num2=-190;
console.log("Number2 is: "+num2);//-190
console.log("Type is: "+typeof(num2));//number

let num3=167.6767;
console.log("Number3 is: "+num3);//167.6767
console.log("Type is: "+typeof(num3));//number

console.log("---Boolean DataType(true/false)----");
 
let isActive=true;
console.log("Value of isActive: "+isActive);//true
console.log("Type is: "+typeof isActive);//boolean

let isStatus=false;
console.log("Value is: "+isStatus);//false
console.log("Type is: "+typeof isStatus);//boolean

/*
String
--------------
Collection of characters
String is immutable class

Declaration ways
--------------------
1.using single quote 'string'
2.using double quotes "string"
3.using template string(backtick) `string`
*/

let userName='Jay';
console.log("User name is: "+userName);//Jay
console.log("Type is: "+typeof userName);//string


let email="jay@gmail.com";
console.log("Email is: "+email);//jay@gmail.com
console.log("Type of "+typeof email);//string

//template string : big strings ``

let profile=`My name is Priyanka, I have over 15 years experience in Automation,
I completed my masters in computers and 
I worked as freelance trainer handle multiple corporate batched 
and I am ISTQB certified tester`;

console.log("My Profile: "+profile);
console.log("Type is: "+typeof profile);




