/*
Polymorphism
---------------
Its a property where one thing in many form we can reuse

Types:
======
1.Compile time polymorphism(Method Overloading)
2.Runtime Polymorphism(Method Overriding)


Method Overloading:
---------------------
Method can be overloaded only when method is declared with same name 
and different signature

Signature
-----------------
1.Pass number of parameters
2.Pass different types of parameter
3.Change order of parameter

As Javascript is Interprer based language so in this we dont have
compiler to compile the code
so Method Overloading (Compile time polymorphism ) is not supported in js

Purpose:
Method Reusability

Real time examples:
----------------------
Payment gateway
Ola/Uber
communication


Runtime Polymorphism
------------------------
When two classes have a Is-A relation and
 same name with same parameter (same signature)
 method is present in both the classes then Child class method
 override parent class method


*/

console.log("-----Method Overloading is not possible-----");

class MethodOverload
{

print()
{
    console.log("Print 1 is calling......");
    
}

print(id,name)
{
    console.log("id is: "+id+"name is: "+name);
    
}

print(data)
{
console.log("Bye everyone!....");

}

}

let m1=new MethodOverload();
m1.print(101,"Parag");


console.log("------------Run time polymorphism------");
//Method Overriding

class Fruit
{
    eat()
    {
        console.log("Enjoy Fruit.....");
        
    }
}


class Orange extends Fruit
{ 
    eat()
    {
        console.log("Enjoy Fruit....Orange");
        
    }

}

//object
let f1=new Fruit();
f1.eat();

let o1=new Orange();
o1.eat();
