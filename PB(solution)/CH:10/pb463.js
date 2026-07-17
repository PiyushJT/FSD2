// Write a node.js script to insert 4 documents simultaneously in a 
// collection. Assume that schema is already created having 
// name(string), surname(string), age(Number), active(Boolean) fields.

const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true},
        Surname:String,
        age:Number,
        active:Boolean,
        date:{type:Date, default:new Date().toLocaleDateString()}
    }
);
const person=new mg.model("person",mySchema)

const createDoc=async()=>
{
    try{
        const personData=[
            {
                name:"test1",
                Surname:"XYZ1",
                age:3,
                active:true
            },
            {
                name:"test2",   
                Surname:"XYZ2",
                age:4,
                active:true
            },
            {
                name:"test3",
                Surname:"XYZ3",
                age:5,
                active:true
            },
            {
                name:"test4",
                Surname:"XYZ4",
                age:6,
                active:true
            }
        ]
        const result=await person.insertMany(personData);
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}
createDoc();
    