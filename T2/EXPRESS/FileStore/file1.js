// WRITE AN EXPRESS SCRIPT THAT ACCEPTS A SINGLE FILE TO BE UPLOADED USING THE MULTER MIDDLEWARE AND SAVE THE FILE TO THE SPECIFIC DIRECTORY NAME LJU 
const multer = require("multer")
const express =   require("express")
app=express()
app.use(express.static(__dirname,{index:'file1.html'}))
var store= multer.diskStorage({
    destination:"LJU123",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }   
})
var upload=multer({storage:store})
app.post("/upload",upload.single("myfile"),(req,res)=>{
    const file= req.file
    if(file){
        res.send("<h1>file"+file.originalname+"has been upload in"+file.destination+"folder")
    }
})
app.listen(3200)