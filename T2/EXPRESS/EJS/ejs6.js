// Develop a web application using express and EJS to accept mark to t1,t2,t3,t4  each out of 25 through a form using post method after submiision display all entered mark in a table along with a total mark and determine the result if total mark is 35 or more  pass in green color otherwise fail in red color
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("form1");
});
app.post("/result1", (req, res) => {
    const { t1, t2, t3, t4 } = req.body;
    const total = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);
    res.render("result1", { t1, t2, t3, t4, total });
});
app.listen(3204, () => {
    console.log("Server is running on port 3204");
});