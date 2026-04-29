// 1.create ejs file contact.ejs that display heding contact form and a form with name email and submit button 
// 2.render this ejs on the contact route 
// 3.hendle form submission using the post method on submit route 
// 4.after form submission display the message on browser thank you "name" we have received your email "email"
express = require("express")
const path = require("path")
app = express()
app.set("view engine", "ejs")
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.use(express.urlencoded({ extended: true }))
app.post("/submit", (req, res) => {
    const { name, email } = req.body
    res.send("Thank you " + name + " we have received your email " + email)
})
app.listen(3204, () => {
    console.log("Server is running on port 3204")
})