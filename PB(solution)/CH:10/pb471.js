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

app.listen(3000,()=>{console.log("Server is running on port 3000")});