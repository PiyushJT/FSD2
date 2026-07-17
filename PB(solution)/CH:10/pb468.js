// Create one login form having username , password and submit button 
// . By clicking submit button username and password should be store 
// inside database. Use mongoose and express module. write all 
// necessary files pb468.html 

const express=require("express");
const mg=require("mongoose");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pb468.html");
});

mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});

const mySchema=new mg.Schema(
    {
        username:{type:String, required:true},
        password:{type:String, required:true}
    }
);
const user=new mg.model("user",mySchema)

const createDoc=async(username,password)=>
{
    try{
        const userData=new user({
            username:username,
            password:password
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
    const {username,password}=req.body;
    createDoc(username,password);
    res.send("Data inserted successfully");
});

app.listen(3000,()=>{console.log("Server is running on port 3000")});
