console.log("-----simple if-----");
//one true condition test

let year=2025;

if(year === 2025)
{
    console.log("Current year matched!..."+year);
    
}
console.log("-------false condition------");

console.log("program started.....");

let cyear=2025;

if(cyear === 2026)
{
    console.log("Current year is 2026!");
    
}

console.log("Program ends.....");

console.log("--------if else-----------");
//test true and false depends on scenario

let age=10;

if(age>=18)
{
    console.log("Valid age!.....");
    
}
else
{
    console.log("Invalid age!.....");
    
}

console.log("---------Ladder if---------");

/*
Test number is positive,negative or 0
 */

let num=0;

if(num>0)
{
    console.log(num+" is Positive");
    
}else if(num<0)
{
        console.log(num+" is Negative");

}else if(num===0)
{
        console.log(num+" is Zero");

}
else{
    console.log("Wrong number!")
}

console.log("---------Real Scenario in Automation---------");
/*
Browser scenario: 
String method: includes()
*/

let bname="Edge".toLowerCase();

if(bname.includes("chrome"))
{
    console.log("Test case is executing on "+bname);
    
}else if(bname.includes("edge"))
{
        console.log("Test case is executing on "+bname);

}else if(bname.includes("firefox"))
{
        console.log("Test case executing on "+bname);

}else{
    console.log("Wrong browser name!");
    
}

console.log("-------------Nested If-----------");
/*
accept marks and compare
 if marks >=90 then grade is A ,
if marks >=95 then grade is A++
otherwaise grade is B
*/

let marks=67;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
        
    }else{
        console.log("A");
        
    }
}else{
    console.log("B");
    
}

console.log("-------Switch case---------");

//traffic signal light

let color="green";

switch(color)
{
    case "red": 
        console.log("STOP");
        break;
        
    case "yellow":
        console.log("READY");
        break
        
    case "green":
        console.log("GO");
        break;

        default: 
        console.log("Wrong color");
        
        
}


//Assignment:
/*
Write browser scenario using switch case 
test for 3 browser chrome,edge,firefox

*/






























