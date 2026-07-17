// Consider a collection student having documents like this:
// [
//  {_id:123433,name: "DDD",age:32},
//  {_id:123434,name: "BBB",age:20},
//  {_id:123435,name: "AAA BBB",age:10}
// ]
// (1) Retrieve all records having “BBB” as a substring in name by 
// indexing. Apply required indexing. Predict the values of nReturned & 
// docsExamined properties also.
// (2) Create an index and fire a command to retrieve documents having 
// age>15. Stats must return values  nReturned=2 & docExamined=2, 
// even though total 3 records are there.

const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true},
        age:Number
    }
);
const student=new mg.model("student",mySchema)
const createDoc=async()=>
{
    try{
        const studentData=[ 
            {
                name:"DDD",
                age:32
            },
            {
                name:"BBB",
                age:20
            },
            {   
            name:"AAA BBB",
                age:10
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

1> const createIndex=async()=>
{
    try{
        const result=await student.collection.createIndex({name:1});
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}
createIndex();

2> const createIndexSubset=async()=>
{
    try{
        const result=await student.collection.createIndex({age:1});
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}

createIndexSubset();
