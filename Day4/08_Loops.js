/*
1.for loop:
----------------
Number of iterations are fixed/known

2.while loop
-----------------
Number of iterations are unknown
Entry control loop


3.do-while loop
-------------------
One time execution without matter what condition it is
exit control 

*/

console.log("---------for loop-------");

for(let i=1;i<=5;i++)
{
    console.log("Hello All!");
    
}

console.log("-------------");

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("-------------");
for(let i=10;i>=1;i--)
{
    console.log(i);
    
}
console.log("-------------");
//factorial of 5!=5*4*3*2*1=120
let fact=1;

for(let i=5;i>=1;i--)
{
fact=fact*i;
}

console.log("Factorial of 5 is: "+fact);
console.log("-------------");
/*
//by default condition will be true: this will run infinite time
for(;;)
{
    console.log("Hi!");
    
}
*/

console.log("-----while loop-----");
/*
Number of iterations are unkown
entry control loop
*/

let i=1;
while(i<=5)
{
    console.log("Welcome");
    i++;
    
}

console.log("-----sum of 100 natural number-----");
/*
1+2+3+4+5.....+100=5050
*/

let num=1;
let sum=0;
while(num<=100)
{
    sum=sum+num;
    num++;
}

console.log("sum is: "+sum);//5050


console.log("------Do while loop-------");
//one time execution

let j=1;
do{
    console.log("Hello Everyone!");
    j++
    
}while(j>=10);
























