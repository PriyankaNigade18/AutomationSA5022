/*

Inheritance:
-------------------
It is aquaring properties of one class into other class is Inheritance

Purpose: 
    1.To avoid code duplication
    2.To Reuse the code
    3.To achieve Run time polymorphim

Real Time Example: Parent and child relation

Types
-----------
1.Single level
2.Multi level
3.Heirarchical
4.Multiple
5.Hybrid(Dimond problem in Java)

In js 4th and 5th type not posible

How to implements: extends keyword


Inheritance scenario:
-------------------------
1.Create parent class object and get the parent class methods access
2.Create Child class object and get the Parent + child methods access


*/


class A 
{
    m1()
    {
        console.log("M1 is calling....");
        
    }
}


class B extends A //single level inheritnace
{
     m2()
    {
        console.log("M2 is calling....");
        
    }
}

console.log("------------Objects------------------");

console.log("Scenario1: create Parent class object: parent Methods");

let a1=new A();
a1.m1();//individual method

console.log("Scenario2: create child class object: parent + child methods ");

let b1=new B();
b1.m2();//individual
b1.m1();//inherited

console.log("---------------------------------------");



class Car
{
    start()
    {
        console.log("Car....start()");
        
    }

    refule()
    {
        console.log("Car....refule()");
        
    }

    stop()
    {
        console.log("Car....stop()");
        
    }
    price()
    {
        console.log("Car......1L");
        
    }

}

class BMW extends Car//single level
{
autoEngine()
{
    console.log("BMW.....autoEngine()");
    
}
price()
    {
        console.log("BMW......50L");
        
    }
}


class BMW2 extends BMW//Multi level
{
    autoStart()
    {
        console.log("BMW2.....autoStart()");
        
    }
}

class Audi extends Car//Hiearachical Inheritance
{
autoGear()
{
    console.log("Audi....autoGear()");
    
}
price()
    {
        console.log("Audi......45L");
        
    }
}
console.log("-------Parent Object--------");

//Object
let c1=new Car();
c1.start();
c1.refule();
c1.stop();
c1.price();
//c1.autoEngine();//TypeError: c1.autoEngine is not a function
console.log("-------child Object--------");

let obj=new BMW();
obj.start();
obj.refule();
obj.stop();
obj.autoEngine();
obj.price();
//obj.autoStart();//TypeError: obj.autoStart is not a function
console.log("-------child Object--------");

let b2=new BMW2();
b2.start();
b2.refule();
b2.stop();
b2.autoEngine();
b2.autoStart();


console.log("------Audi object-----");

let a=new Audi();
a.start();
a.autoGear();
a.refule();
a.stop();
a.price();
//a.autoEngine();//TypeError: a.autoEngine is not a function


