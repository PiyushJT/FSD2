// Write a node.js script to define a schema having fields like 
// name,surname,email,password,city.
// Apply following validations:
// (1)name field must required .
// (2)surname must accept values in small letters.
// (3) Perform Email ID validation on Email field.
//  (4) password must have minimum and maximum length should be 8  
// & 12 respectively
//  (5)city allowed values are “baroda”,”surat” and “ahmedabad” only

const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true},
        surname:{type:String, match:/^[a-z]+$/},
        email:{type:String, match:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/},
        password:{type:String, minlength:8, maxlength:12},
        city:{type:String, enum:["baroda","surat","ahmedabad"]}
    }
);

