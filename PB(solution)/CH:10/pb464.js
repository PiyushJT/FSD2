// Consider a collection student having documents like this:
// [
//  {_id:123433,name: "DDD",age:32},
//  {_id:123434,name: "BBB",age:20},
//  {_id:123435,name: "AAA",age:10},
// ]
// Do as directed:
// (1) Create an index & fire a command to retrieve a document having 
// age>15 and name is "BBB". Stats must return values nReturned=1, 
// docExamined=1, stage="IXSCAN". Perform required indexing.
// (2) Create an index on subset of a collection having age>30. Also 
// write a command to get a stats "IXSCAN" for age>30

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
                name:"AAA",
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

const createIndex=async()=>
{
    try{
        const result=await student.createIndexes({age:1,name:1});
        console.log(result);
        const ans= await student.find({age:{$gt:15},name:"BBB"}).explain("executionStats");
        console.log(ans);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }

}

const createIndexSubset=async()=>
{
    try{
        const result=await student.collection.createIndex({age:1}).partialFilterExpression({age:{$gt:30}});
        console.log(result);
        const ans= await student.find({age:{$gt:30}}).explain("executionStats");
        console.log(ans);
    }   
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}

createIndex();
createIndexSubset();

