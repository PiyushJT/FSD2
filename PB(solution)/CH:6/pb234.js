// Write express js script to upload file with size limit of 1 MB to a 
// specific directory named “Data” on the server.
const express = require('express');
const multer = require('multer');
const app = express();
var store= multer.diskStorage({
    destination:"Data",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})  
var upload = multer({storage:store, limits:{fileSize: 1 * 1024 * 1024}})
app.get('/',(req,res)=>{
                res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file'><button type='submit'>Upload</button></form>")
}   
)   
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send("File uploaded successfully")
})
app.listen(3000)