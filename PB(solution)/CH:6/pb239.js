// Write a code to set up nodemailer in Express.js.
// Sender email id: “lju@gmail.com”.
// Receiver email ids: “student@gmail.com and faculty@gmail.com”.
// Mail subject should be “LJ University”
// Mail body contains “Welcome Student” in h3 tag and in table display
// data Date 28/06/23, Exam name FSD-2.
const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lju@gmail.com',
        pass: 'your-password'
    }
})
// Set up email data
const mailOptions = {
    from: 'lju@gmail.com',
    to: 'student@gmail.com,faculty@gmail.com',
    subject: 'LJ University',
    html: `<h3>Welcome Student</h3><table border="1"><tr><th>Date</th><th>Exam Name</th></tr><tr><td>28/06/23</td><td>FSD-2</td></tr></table>`  
}
// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('Email sent: ' + info.response)
    }
})
app.listen(5200)