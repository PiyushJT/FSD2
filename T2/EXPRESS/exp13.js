const express = require("express");
const app = express();
const addName = (req, res, next) => {
    req.name = "SDS";
    console.log("Name Added");
    next();
};
const addCollege = (req, res, next) => {
    req.College = "LJU";
    console.log("College Added");
    next();
};
const addMarks = (req, res, next) => {
    req.total = 50 + 40;
    console.log("Marks Added");
    next();
};
app.get("/student", addName, addCollege, addMarks, (req, res) => {
    res.send(
        "Name:" +
        req.name +
        "<br> College:" +
        req.College +
        "<br> Marks:" +
        req.total
    );
});
app.listen(3005, () => {
    console.log(" running ");
});