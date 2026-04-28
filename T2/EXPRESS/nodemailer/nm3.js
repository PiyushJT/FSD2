// Write an Express.js code to send a mail. Create one html file which
// has one email field and one submit button. Fetch the email address
// from email field and send a mail to that email address.
// Mail subject should be “Exam Timetable”. Mail body contains “L J
// University” in h3 tag and display data (Date 21/05/25, Exam name
// FSD-2) in table
const express = require("express")
const nodemailer = require("nodemailer")
app = express()
app.use(express.static(__dirname, { index: 'nm3.html' }))
app.use(express.urlencoded({ extended: true }))
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: ""
    }
});
app.post("/submit", (req, res) => {
    const { name, email } = req.body
    var mailOptions = { 
        from: "",
        to: email,
        subject: "Exam Timetable",
        html: `<h3>L J University</h3><table border="1"><tr><th>Date</th><th>Exam Name</th></tr><tr><td>21/05/25</td><td>FSD-2</td></tr></table>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send("Error sending email");
        }
        else {
            console.log('Email sent: ' + info.response);
            res.send("Thank you for your response!");
        }
    });
})
app.listen(3204, () => {
    console.log("Server is running on port 3204");
})