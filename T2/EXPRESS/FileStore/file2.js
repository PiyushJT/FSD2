// wae that accepts multiple file maxmimum number 5 to be uploaded using multer middleware and save the file to the specific directary multiple
const multer = require("multer")
const express = require("express")
app = express()
app.use(express.static(__dirname, { index: 'file2.html' }))
var store = multer.diskStorage({
    destination: "multiple",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: store })
app.post("/upload", upload.array("myfile", 5), (req, res) => {
    const file = req.files
    if (file) {
       for(i of file){
        res.write("<h1>file" + i.originalname + "has been upload in" + i.destination + "folder")}
    res.send()
    }
})
app.listen(3201)