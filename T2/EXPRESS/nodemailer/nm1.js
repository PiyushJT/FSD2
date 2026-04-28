// nodemailer
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "bed.buddy777@gmail.com",
        pass: "mowcwbcjslpbtsov"    
    }
});
app.get("/sendmail", (req, res) => {
    var mailOptions = {
        from: "bed.buddy777@gmail.com",
        to: "studyverse1311@gmail.com", 
        subject: "Sending Email using Node.js",
        text: "That was easy!"
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send("Error sending email");
        } else {
            console.log('Email sent: ' + info.response);
            res.send("Email sent successfully");
        }   
    });
});
app.listen(3203, () => {
    console.log("Server is running on port 3203");
});
