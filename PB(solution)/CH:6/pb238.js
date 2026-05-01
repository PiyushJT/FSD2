// Perform the following tasks as asked:
// 1) Create a HTML file for response form and this file should be
// loaded on home(‘/’) page.
// •Fields are : Name, Email and Submit button.
// 2) Once Response is submitted, message “Thank you for your
// response.” Will be displayed on page ‘/response’ and also send mail
// to the entered email id with the submitted response
const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("<!DOCTYPE html><html><head><title>Response Form</title></head><body><h1>Response Form</h1><form action='/response' method='post'><label for='name'>Name:</label><input type='text' id='name' name='name' required><br><label for='email'>Email:</label><input type='email' id='email' name='email' required><br><button type='submit'>Submit</button></form></body></html>")
})
app.post("/response", (req, res) => {
    const { name, email } = req.body
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    })
    // Set up email data
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Response Received',
        text: `Thank you for your response, ${name}.`
    }
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send("Error sending email")
        } else {
            console.log('Email sent: ' + info.response)
            res.send("Thank you for your response.")
        }   
    })
}
)
app.listen(5200, () => {
    console.log("Server is running on port 5200")
})