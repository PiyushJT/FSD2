// Write an express js script that allows only image type file to be 
// uploaded using the multer middleware and saves the file to the 
// specific directory called “IMAGES”. If file other than image has been 
// uploaded then it will give an error message that “Upload only image 
// file”. 
const express = require('express');
const multer = require('multer');
const app = express();
var store= multer.diskStorage({
    destination:"IMAGES",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
app.get('/',(req,res)=>{
                res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file' ><button type='submit'>Upload</button></form>")
}   
)
var upload = multer({storage:store, fileFilter:(req,file,cb)=>{
    const filetypes = file.originalname.split('.').pop().toLowerCase();
    if(filetypes == 'jpeg' || filetypes == 'jpg' || filetypes == 'png'){
        cb(null,true)
    }else{
        cb(new Error("Upload only image file"))
    }
}})
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send("File uploaded successfully")
})
app.listen(3000)