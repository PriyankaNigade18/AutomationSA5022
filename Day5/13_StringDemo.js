/*
String is Collection of characters
String is Immutable Class

*/
//Immutable
let message="hello";
console.log(typeof message);//string
console.log(message);//hello
message[0]='R';
console.log(message);//hello

console.log("-------------Methods-----------");

//length property 
let s1="Hello All";
console.log("Total length of characters: "+s1.length);

//toUpperCase()
console.log(s1.toUpperCase());

//toLowerCase()
console.log(s1.toLowerCase());

//charAt(index)
console.log("character at 6th index: "+s1.charAt(6));//A

//trim():remove white space before and after string
let s2="      Welcome All      ";
console.log(s2);
console.log(s2.trim());

//replace()
let s3="Hello All we are learning Programming and It is Javascript Programming"
console.log(s3);
console.log(s3.replace("Programming","*******"));

//replaceAll()
let s4="Hello All we are learning Programming and It is Javascript Programming"
console.log(s4);
console.log(s4.replaceAll("Programming","000000000"));

//includes() : partial match

console.log("Check for Javascript?: "+s4.includes("Javascript"));//true
console.log("check for Cypress?: "+s4.includes("Cypress"));//false

//split()
let tools="Selenium,Appium,Cypress,Playwright,Postman";
console.log(tools);

let arr=tools.split(",");

for( let i of arr)
{
    console.log(i);
    
}
console.log("------------");


let tool=tools.split(",")[3];
console.log(tool);

//write js logic to reverse string











