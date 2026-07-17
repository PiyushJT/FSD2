// Write an express JS script to insert a document in database using
// Mongoose.


const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});


const mySchema=new mg.Schema(
    {
        name:{
            type:String,
            required:true
        },
        Surname:String,
        age:Number,
        active:Boolean,
        date:{
            type:Date,
            default:new Date().toLocaleDateString()
        }
    }
);
const person=new mg.model("person",mySchema)
const createDoc=async()=>
{
    try{
        const personData=new person({
            name:"test",
            Surname:"XYZ",
            age:3,
            active:true
        })
        const result=await personData.save(); //for single data record
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}
createDoc();

