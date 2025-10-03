/**
 * Array
 * -------------
 * Array is static data structure
 * Array type and array size is fixed
 * Array is collection of similar type of data and object
 * 
 * Array in js it is an Object
 * 
 * Types of Array
 * -----------------
 * 1.Single dimensional array -1D
 * 2.Multi dimensional array  -2D
 * 
 * syntax:
 * ----------------
 * let arrayVarName=[data1,data2,data3...n];
 * 
 * Array elements get store as per its index , where indexing starts with 0
 * 
 * To get the length of array we have length property
 * ------------------------
 * 
 * In js we have method support
 *  
 */

let arr=[];
console.log(arr);//[]
console.log(typeof arr);//Object

let id=[101,102,103,104,105];

console.log("Total elements are: "+id.length);

//single element
console.log(id[3]);//104

//for wrong index
console.log(id[10]);//undefined

console.log(id);
/*
    1.for loop
    2.for...of loop
    3.for...in loop

    for...of loop is iterate over values applicable for array and string
    for...in loop is iterate over keys or index for Object


*/

console.log("------Simple for loop---------");

for(let i=0;i<id.length;i++)
{
    console.log(id[i]);
    
}
console.log("--------for of loop------");

for(let i of id)
{
    console.log(i);
    
}

console.log("--------for in loop------");
//for in loop applicable for object as it iterates index or keys

for(let i in id)
{
    console.log(i);//index
    
}

console.log("--------for in loop for array------");

for(let i in id)
{
    console.log("index: "+i+" value is: "+id[i]);
    
}

console.log("----------Methods for Array in Js----------");

let color=["Red","Blue","Pink","White"];
console.log("Total colors: "+color.length);
console.log(color);//[ 'Red', 'Blue', 'Pink', 'White' ]

//1.push():Appends new elements to the end of an array, and returns the new length of the array.
let newLength=color.push("Black");//[ 'Red', 'Blue', 'Pink', 'White', 'Black' ]
console.log(color);
console.log("New lenght is: "+newLength);

//2.unshift():Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift("Yellow");
console.log(color);//[ 'Yellow', 'Red', 'Blue', 'Pink', 'White', 'Black' ]

//3.pop():Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedColor1=color.pop();
console.log(deletedColor1);//Black
console.log(color);//[ 'Yellow', 'Red', 'Blue', 'Pink', 'White' ]

//4.shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let deletedColor2=color.shift();
console.log(deletedColor2);//Yellow
console.log(color);//[ 'Red', 'Blue', 'Pink', 'White' ]

console.log("--------------------------------------");

let userName=["Ravi","Smita","Kiran","Ritika","Amit"];
    //index      0      1        2        3       4
console.log("Total users: "+userName.length);
console.log(userName);

//splice():Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//syntax:splice(start index,total count for delete ele,replacevalue);
/*
let deletedName1=userName.splice(1,1);
console.log(deletedName1);//[ 'Smita' ]
console.log(userName);//[ 'Ravi', 'Kiran', 'Ritika', 'Amit' ]
*/
let deletedName2=userName.splice(1,1,"Jay");
console.log(deletedName2);//[ 'Smita' ]
console.log(userName);//[ 'Ravi', 'Jay', 'Kiran', 'Ritika', 'Amit' ]

let deletedUsers=userName.splice(2,3);
console.log(deletedUsers);//[ 'Kiran', 'Ritika', 'Amit' ]
console.log(userName);//[ 'Ravi', 'Jay' ]

userName.push("Geeta","Sumit","Ravi","Dhiraj");
console.log(userName);//[ 'Ravi', 'Jay', 'Geeta', 'Sumit', 'Ravi', 'Dhiraj' ]
/*                          0       1     2        3        4        5
//to delete first Ravi
userName.splice(0,1);
console.log(userName);//[ 'Jay', 'Geeta', 'Sumit', 'Ravi','Dhiraj' ]
*/

//delete 2nd Ravi
userName.splice(4,1)
console.log(userName);

console.log("--------------------");


let empId=[1,2,3,4,5,6,7,8,9,10];

//forEach():Performs the specified action for each element in an array.
empId.forEach(function(num){//num is variable name for array ele
console.log(num);
})
console.log("-----------------------");

empId.forEach((num)=>{
if(num>5)
{
    console.log(num);
    
}
})

console.log("--------------");

//map():Calls a defined callback function on each element of an array, and returns an array that contains the results.
//sum of elements of array
let sum=0;
empId.map((num)=>{
sum=sum+num;

});
console.log("Total sum: "+sum);

console.log("--------------Multi D Array------------");

let loginData=[["Amit","amit123"],
                ["Admin","admin123"],
                    ["Kiran","kiran123"]];
                    
        console.log(loginData);
                    
//admin123
console.log(loginData[1][1]);

console.log(loginData[1]);

console.log("-----Iterate Multi D array-----");

for(let i of loginData)
{
    console.log(i);
    
}

































