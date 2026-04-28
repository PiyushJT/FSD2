//  Write a code snippet to configure the multer middleware to store 
// uploaded files in a specific directory called "uploads"
const express = require('express');
const multer = require('multer');
const app = express();
var store= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }                   
})
var upload = multer({storage:store})
app.get('/',(req,res)=>{
                res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file'><button type='submit'>Upload</button></form>")
}   
)
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send("File uploaded successfully")
})  
app.listen(3000)