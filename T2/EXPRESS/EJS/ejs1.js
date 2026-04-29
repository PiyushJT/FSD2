express = require("express")
app = express()
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("e1", { name: "L J University", date: "21/05/25", exam: "FSD-2" })
})
app.listen(3204, () => {
    console.log("Server is running on port 3204")
})