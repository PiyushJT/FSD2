//  Write an express JS script to upload any type of file of size up to 
// 50KB only.
const express = require('express');
const multer = require('multer');
const app = express();
var store= multer.diskStorage({
    destination:"LJU123",
    filename:(req,file,cb)=>{   
        cb(null,file.originalname)
    }
})
var upload = multer({storage:store, limits:{fileSize: 50 * 1024}})
app.get('/',(req,res)=>{
                res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file'><button type='submit'>Upload</button></form>")
}
)
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send("File uploaded successfully")
})
app.listen(3000)