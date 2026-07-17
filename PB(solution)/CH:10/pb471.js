// Create a React form which accepts Name,Rollno and totalmarks,on 
// submitting the form it should be saved in data table inside MongoDB 
// database named student. pb471.html

const express=require("express");
const mg=require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pb471.html");
}
)

mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true},
        rollno:Number,
        totalmarks:Number
    }
);
const student=new mg.model("student",mySchema)

const createDoc=async(name,rollno,totalmarks)=>
{
    try{
        const studentData=new student({
            name:name,
            rollno:rollno,
            totalmarks:totalmarks
        })
        const result=await studentData.save();
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));