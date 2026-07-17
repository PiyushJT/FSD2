// Write a node.js script to define a schema having fields like name, age 
// and gender 
// Apply following validations:
// (1) name field must be required field with minimum and maximum 
// length of 4 & 12 respectively
// (2) age must accept a value from 1<=age<=35 only.
// (3) gender must accept values in capital letters only and allowed 
// values are “male” & “female” only.

const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true, minlength:4, maxlength:12},
        age:{type:Number, min:1, max:35},
        gender:{type:String, match:/^[A-Z]+$/, enum:["MALE","FEMALE"]}
    }
);
const student=new mg.model("student",mySchema)

const createDoc=async()=>
{
    try{
        const studentData=[
            {
                name:"test1",
                age:3,
                gender:"MALE"
            },
            {
                name:"test2",   
                age:4,
                gender:"FEMALE"
            },
            {
                name:"test3",
                age:5,
                gender:"MALE"
            },
            {
                name:"test4",
                age:6,
                gender:"FEMALE"
            }
        ]
        const result=await student.insertMany(studentData);
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}
createDoc();

