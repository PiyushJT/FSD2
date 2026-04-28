// Create an Express.js route that accepts file uploads using the multer 
// middleware and resizes and saves the uploaded image in multiple 
// sizes (e.g., small, medium, large) to a specific directory on the server
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const app = express();
var store= multer.diskStorage({
    destination:"uploads",  
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
var upload = multer({storage:store})
app.get('/',(req,res)=>{
                res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='file' accept='.jpeg'><button type='submit'>Upload</button></form>")
}   
)
app.post('/upload',upload.single('file'), (req,res)=>{
    const filePath = req.file.path;
    const fileName = req.file.originalname.split('.')[0];   
     sharp(filePath).resize(200, 200).toFile(`uploads/${fileName}_small.jpg`);
     sharp(filePath).resize(500, 500).toFile(`uploads/${fileName}_medium.jpg`);
     sharp(filePath).resize(1000, 1000).toFile(`uploads/${fileName}_large.jpg`);
    res.send("File uploaded and resized successfully")
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})