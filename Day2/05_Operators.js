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

let e=89;
let f=--e;
console.log(e);//88
console.log(f);//88

let k=587;
let s=k--;
console.log(k);//586
console.log(s);//587

console.log("----Interview questions-----");
console.log(90/0);//infinity
console.log(-90/0);//-Infinity
console.log("Hello"/0);//NaN(not a number)
console.log(undefined/67);//NaN
console.log(0/0);//NaN

/*
isNaN() : is that value is not a number : boolean
*/

let username="Jay";
console.log(isNaN(username));//true

let num=90;
console.log(isNaN(num));//false
console.log("-----Relational operators------");
/*
< <= > >= != ==(loose equality) ===(strict equality)

a1=79 b1=78  x=y=81 e=f=88 k=586
*/

console.log("< less than: "+(a1<y));//true
console.log("<= less than equal to: "+(e<=f));//true
console.log("> greater than: "+(k>x));//true
console.log(a1>k);//false
console.log(">= greter than equal to: "+(e>=y));//true
console.log(y>=e);//false
console.log("!= not equal to:  "+(e!=f));//false
console.log(a1!=x);//true

/*
== loose equality: here it will convert the type and test value
=== strict equality: here it will not conver type and test value
*/
console.log("5"==5);//true
console.log(undefined==null);//true



console.log("5"===5);//false
console.log(undefined===null);//false

console.log("--------Logical operators----------");
/*

c1      c2      &&(AND)     ||(OR)        !(NOT !c1)
true    true    true        true            false
true    false   false       true            false
false   true    false       true            true
false   false   false       false           true

Test data:

*/

console.log("------&&-------");
console.log((a1<y) && (e<=f));//true
console.log((a1<y) && (e>f));//false
console.log((e>f) && (a1<y));//false
console.log((a1>y) && (e>f));//false


console.log("------||-------");
console.log((a1<y) || (e<=f));//true
console.log((a1<y) || (e>f));//true
console.log((e>f) || (a1<y));//true
console.log((a1>y) || (e>f));//false


console.log("------!(not)-------");

console.log(a1<y);//true
console.log(!(a1<y));//false

console.log(y>k);//false
console.log(!(y>k));//true


































