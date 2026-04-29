express = require("express")
const path = require("path")
app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname))
app.get("/", (req, res) => {
    res.render("e4")
}
)
app.listen(3204, () => {
    console.log("Server is running on port 3204")
})