// create an html file for response form and this file should loaded on home page field are name email and submoit button once response is submited message thank you for your response will be diplay on page response and also send mail to the enter email id with the submited response 
const express = require("express")
const nodemailer = require("nodemailer")
app = express()
app.use(express.static(__dirname, { index: 'nm2.html' }))
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
        subject: "Response Received",
        text: `Thank you for your response, ${name}! We have received your submission.`
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
}
)
app.listen(3204, () => {
    console.log("Server is running on port 3204");
})
