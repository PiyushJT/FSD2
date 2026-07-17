// Write a program using react and node/express to demonstrate a full 
// stack connectivity. Take one textfield, submit button on react and 
// insert a corresponding record in database via node/express script. 
// Write required files. pb469.html

const express=require("express");
const mg=require("mongoose");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pb469.html");
}
);

mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        name:{type:String, required:true}
    }
);
const user=new mg.model("user",mySchema)

const createDoc=async(name)=>
{
    try{
        const userData=new user({
            name:name
        })
        const result=await userData.save();
        console.log(result);
    }
    catch(err)
    {
        console.log("Error Occured" + err);
    }
}

app.post("/submit",(req,res)=>{
    const {name}=req.body;
    createDoc(name);
    res.send("Data inserted successfully");
});

app.listen(3000,()=>{console.log("Server is running on port 3000")});
