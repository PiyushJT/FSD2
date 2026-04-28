// write a expressJS script to configure to multer midleware performe the following task
// 1.create a html file named file3.html this file contain heading upload your cv in red color and a form with input type file and submit button 
// 2.create a js file named file3.js and link this js and html file to browser html file on home page 
// 3.after uploading a file display message on upload page file orginal name file has been uploaded 
// 4.set uploaded file  to specific directory named example and file must be stoe in format of cv-timestamp.pdf where cv is the field name
const multer = require("multer")
const express = require("express")
app = express()
app.use(express.static(__dirname, { index: 'file3.html' }))
var store = multer.diskStorage({
    destination: "example",
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        cb(null,file.fieldname + "-" + timestamp + ".pdf")
    }
})
var upload = multer({ storage: store })
app.post("/upload", upload.single("cv"), (req, res) => {
    const file = req.file
    if (file) {
        res.send("file " + file.originalname + " has been uploaded")
    }
})
app.listen(3202)