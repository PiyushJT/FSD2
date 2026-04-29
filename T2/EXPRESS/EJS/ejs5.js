/* Develop a web application using express and EJS that allows user to 
enter a student name and marks through a form after submission
the application should display the entered details and determine the results
if the marks are 9 or above show pass in green color otherwise fail in red color */
const express = require("express");
const path = require("path");

const app = express();


app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("form");
});


app.post("/result", (req, res) => {
    const { name, marks } = req.body;

    res.render("result", { name, marks });
});

app.listen(3985, () => {
    console.log("Server running on http://localhost:3985");
});