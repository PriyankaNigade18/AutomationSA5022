/*
Javascript object is Key and value pair information

4 Ways to create an Object
--------------------------------
1.Object literal way(constant)
2.Class level Object
3.Constructor Function
4.Prototype based Object Object.create()

*/

console.log("-----Object literal way------");

let trainer={
        "name":"Priyanka",
        "Job":"SDET",
        "id":101
            };
console.log(trainer);
console.log(typeof trainer);//object
console.log("Name is: "+trainer.name);
console.log("-----Iteration------");

for(let key in trainer)
{
    console.log("For Key: "+key+": value is: "+trainer[key]);
    
}

console.log("---------Class level object--------");

class Color
{

    cName;
    constructor(name)
    {
     this.cName=name;
    }
    getColor()
    {
        console.log("Color name is: "+this.cName);
        
    }

}
//object
let c1=new Color("Red");
c1.getColor();

console.log("---------Constructor Function-------");
/*
Constructor function is used to create & initialize Object and declare this special function
with function keyword.
constructor name should be starts with uppercase letter.

*/


function EmpData(num,name)
{
    //data
this.id=num;
this.ename=name;

    //method/function
   this.getData= function ()
        {
        console.log("Employee id is: "+this.id);
        console.log("Employee name is: "+this.ename);
        
        
        }

}

//object
let e1=new EmpData(101,"Sarang");
e1.getData();

let e2=new EmpData(102,"Geeta");
e2.getData();


console.log("-------Object.create()-------");
/*
This way applicable for Prototype or object literal

*/

let test={
        "subject":"Testing",
        "marks":100
        }
//Creates an object that has the specified prototype or that has null prototype.
       let sub1= Object.create(test);
        console.log(sub1.subject);
        console.log(sub1.marks);
        
        

        
















