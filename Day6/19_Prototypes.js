/*
Prototype is an Object

To create reusable variable or method we use prototype
*/

function EmployeeData(id,name)
{
    this.id=id;
    this.ename=name;

}

//Prototype:reusable of data and method
EmployeeData.prototype.language="Javascript";


//object
let e1=new EmployeeData(101,"Jay");
//e1.language="Javascript";
console.log("Employee id: "+e1.id+" : Employee name is: "+e1.ename+": Language is: "+e1.language);



let e2=new EmployeeData(102,"Kiran");
console.log("Employee id: "+e2.id+" : Employee name is: "+e2.ename+": Language is: "+e2.language);


console.log("----------------------");

let userName="Abhiraj        ";
console.log("Lenght of username is: "+userName.length);//15
console.log(userName.trim().length);//7

String.prototype.trueLenght=function()
                            {
                                return this.trim().length;
                            }

console.log("Total characters:"+userName.trueLenght());


let data="  Hello Everyone!    ";

console.log("Total: "+data.length);
console.log("Message: "+data.trueLenght());







// class Test1 extends EmployeeData
// {

// }

// let t1=new Test1();
// t1.language