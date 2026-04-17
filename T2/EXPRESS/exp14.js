/*Develope a webapplication that simulates a college  a classroom entry system using middlewere when a student excess the class root 
(1)log the student enter the campus
(2) Verify weather the student has a valid id proof or Not
(3) If valid allow entry and display a welcome message 
(4) If not valid deny Access */

const express = require("express");
const app = express();
const entrylog = (req, res, next) => {
    console.log("Student entered the campus");
    req.name="SDS";
    next();
}
const verifyId = (req, res, next) => {
    hashid= true; 
    if (hashid) {
        console.log("Valid ID proof");
        next();
    } else {
        console.log("Invalid ID proof");
        res.send("Access Denied");
    }   
}   
app.get("/classroom", entrylog, verifyId, (req, res) => {
    res.send("Welcome to the classroom, " + req.name);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});