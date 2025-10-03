class Student
{
   

    //method
 setData(id,name)
{
    console.log("SetData() set the data....");
    
    //local
    // let id=101;
    // let stdName="Kiran";
    //global data you can declare uing this keyword
    //this keyword is instance of class you can refer
    this.id=id;
    this.stdName=name;

}

getData()
{    
    console.log("getData() get the data....");
    console.log("Id is: "+this.id);//ReferenceError: id is not defined
    console.log("StudentNAme is: "+this.stdName);
    
    
}

}

//Object created outside of class
let s1=new Student();
s1.setData(111,"Shweta");
s1.getData();

console.log("-------------------------------");




class StudentData
{
    //It is used to initialized object
    constructor(name,id,emailid)
    {
        this.sName=name;
        this.sId=id;
        this.eId=emailid;
    }

    getDetails()
    {
        console.log("Student Name is: "+this.sName);
        console.log("Student id is: "+this.sId);
        console.log("Student email id is: "+this.eId);
        
             
    }
}


//object
let ss1=new StudentData("Rajesh",101,"rajesh@gmail.com");
ss1.getDetails();

let ss2=new StudentData("Anita",102,"anita@gmail.com");
ss2.getDetails();


let ss3=new StudentData("Poonam",222);
console.log(ss3.sName);
console.log(ss3.sId);
console.log(ss3.eId);//undefined
ss3.getDetails();











