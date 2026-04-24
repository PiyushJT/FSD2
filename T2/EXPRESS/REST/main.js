const express = require("express")
const app = express()
const api = require("./exp25")
app.use("/",api)
app.listen(7899,()=>{
    console.log("server is running on port 7899")
})