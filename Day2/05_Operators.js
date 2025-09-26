console.log("-----Arithmetic operators---------");
//+,-,/,*,%
let num1=10,num2=5;
//console.log("Addition is: "+num1+num2);//Addition is: 105

console.log("Addition is: "+(num1+num2));
console.log("Subtraction is: "+(num1-num2));
console.log("Division is: "+(num1/num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Modulus is: "+(num1%num2));

console.log("-----Unary operators---------");
/*
Increment(++)  Decrement operator(--)
postIncrement: value will be incemented not immediate but when u reuse it you will get incremented value
a++;
preIncrement
++a;

let a=100;
a++ = a=a+1

*/

//post increment
let a=100;
console.log(a);//100
console.log(a++);//100
console.log(a);//101

//preincrement
let b=200;
console.log(b);//200
console.log(++b);//201

//postdecrement
let c=90;
console.log(c);//90
console.log(c--);//90
console.log(c);//89

//predecrement
let d=56;
console.log(d);//56
console.log(--d);//55

let a1=78;
let b1=a1++;
console.log(a1);//79
console.log(b1);//78

let x=80;
let y=++x;
console.log(x);//81
console.log(y);//81





