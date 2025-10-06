/*

Encaspulation
---------------
Wrapping of data and functions together in single unit is called Encapsulatio

Purpose: Data hiding/Security

Real time Example: Capsule, Class

How to implement:
In js we can declare data as private and provide access to that data using 
getters and setters

*/


class EmployeeData
{
    //private data in js
    #salary;

    constructor(id,name)
    {
        this.ename=name;
        this.eid=id;
    }

    getData()
        {   
            console.log("Employee name is: "+this.ename);
            console.log("Empployee id is: "+this.eid);
                     
            
        }
    
        setSalary(sal)
        {
            this.#salary=sal;
        }

        getSalary()
        {
            return this.#salary;
        }

}

//object
let e1=new EmployeeData(101,"Kiran");
e1.getData();
e1.setSalary(80000);
console.log("Salary is:"+ e1.getSalary());

console.log("-------");

let e2=new EmployeeData(102,"Sharad");
e2.getData();
e2.setSalary(90000);
console.log("Salaray is: "+e2.getSalary());





