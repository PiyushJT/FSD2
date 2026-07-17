// Create a form containing username and submit button using .html 
// file.After clicking on submit button,insert value of username in the 
// database.(Note: .html and   .js file required)

const express=require("express");
const mg=require("mongoose");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/pb472.html");
}
);
mg.connect("mongodb://localhost:27017/lju").then(()=>{console.log("success")}).catch((err)=>{console.error(err)});
const mySchema=new mg.Schema(
    {
        username:{type:String, required:true}
    }
);
const user=new mg.model("user",mySchema)

const createDoc=async(username)=>
{
    try{
        const userData=new user({
            username:username
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
    const {username}=req.body;
    createDoc(username);
    res.send("Data inserted successfully");
}
);

app.listen(3000,()=>{console.log("Server is running on port 3000")});