// Create a React form which accepts Name,Rollno and totalmarks,on 
// submitting the form it should be saved in data table inside MongoDB 
// database named student. pb471.html

const express=require("express");
const mg=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userSchema=new mg.Schema(
    {
        name:{type:String, required:true},
        rollno:{type:String, required:true},
        totalmarks:{type:Number, required:true}
    }
);
const student=new mg.model("student",userSchema)

mg.connect("mongodb://localhost:27017/student").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});



app.post("/students",async(req,res)=>{
    const {name,rollno,totalmarks}=req.body;
    try{
        const studentData=new student({
            name:name,
            rollno:rollno,
            totalmarks:totalmarks
        })
        const result=await studentData.save();
        console.log(result);
        res.status(200).json({message:"Data inserted successfully"});
    }
    catch(err)
    {
        console.log("Error Occured" + err);
        res.status(500).json({message:"Error inserting data"});
    }

});

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

app.listen(3000,()=>{console.log("Server is running on port 3000")});
