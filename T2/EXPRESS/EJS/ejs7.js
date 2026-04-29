// Write an Express.js application to configure the Multer middleware
// to upload a file. Perform the following tasks:
// 1) Create an EJS file that displays a heading "Upload Document" and
// contains a form with:
//  -One file input field
//  -One submit button
// 2) Render this EJS file on the /home route.
// 3) Configure Multer to store uploaded files in a folder named
// uploads.
// 4) After successful upload, display a message on the /upload route
// showing the original name of the uploaded file.
const express = require("express")
const multer = require("multer")
const app = express()

// Configure Multer to store uploaded files in a folder named uploads
var store= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }   
})
const upload = multer({ storage: store })
app.set("view engine", "ejs")

// Render the EJS file on the /home route
app.get("/home", (req, res) => {
    res.render("form2")
})

// Handle file upload and display a message on the /upload route        
app.post("/upload", upload.single("document"), (req, res) => {
    if (req.file) {
        res.send(`File uploaded successfully: ${req.file.originalname}`)
    } else {
        res.send("No file uploaded")
    }
})
app.listen(3204, () => {
    console.log("Server is running on port 3204")
})