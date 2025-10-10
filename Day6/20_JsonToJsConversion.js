/*
Server data it is in the form of JSON so using JSON.parse() convert it into 
Javascript object

*/

let response=`{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
        "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
    }
    
}`;

//conversion
let jsObject=JSON.parse(response);

//to test id
console.log("Id is: "+jsObject.data.id);//2

//te test email
console.log("Email id is: "+jsObject.data.email);//



