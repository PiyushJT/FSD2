// Write an Express.js application to perform the following tasks:
// 1) Create an EJS file named contact.ejs that displays a heading
// "Contact Form" and contains a form with:
//  -Text input for Name
//  -Email input for Email
//  -Submit button
// 2) Render this EJS file on the /contact route.
// 3) Handle form submission using the POST method on the /submit
// route.
// 4) After form submission, display a message on the browser in the
// format:
// "Thank you (Name), we have received your email (Email)."
const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
// Render the EJS file on the /contact route
app.get("/contact", (req, res) => {
    res.render("contact")
})
// Handle form submission using the POST method on the /submit route
app.post("/submit", (req, res) => {
    const { name, email } = req.body
    res.send("Thank you " + name + ", we have received your email " + email + ".")
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})