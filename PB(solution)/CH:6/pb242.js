// Write an Express.js code to send a mail. Create one html file which
// has one email field and one submit button. Fetch the email address
// from email field and send a mail to that email address.
// Mail subject should be “Exam Timetable”. Mail body contains “L J
// University” in h3 tag and display data (Date 21/05/25, Exam name
// FSD-2) in table
const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.send("<!DOCTYPE html><html><head><title>Email Form</title></head><body><h1>Email Form</h1><form action='/send' method='post'><label for='email'>Email:</label><input type='email' id='email' name='email' required><br><button type='submit'>Submit</button></form></body></html>")
})
app.post("/send", (req, res) => {
    const { email } = req.body
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:"your-email@gmail.com",
            pass:"your-password"
        }
    })
    // Set up email data
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Exam Timetable',
        html: `<h3>L J University</h3><table border="1"><tr><th>Date</th><th>Exam Name</th></tr><tr><td>21/05/25</td><td>FSD-2</td></tr></table>`
    }
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send("Error sending email")
        } else {
            console.log('Email sent: ' + info.response)
            res.send("Email sent successfully")
        }
    })
})
app.listen(5200, () => {
    console.log("Server is running on port 5200")
})