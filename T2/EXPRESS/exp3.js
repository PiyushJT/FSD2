// json file
var student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};
var express = require('express');
var app = express();  
app.get('/', (req, res) => {
    res.type("application/json");
    res.send(student);
});
// app.get('/student', (req, res) => {
//     res.write("Student Information:\n");
//     res.write(JSON.stringify(student));
//     res.send();
// });
// app.get('/student', (req, res) => {
//     res.send(student);
// });
app.get('/student', (req, res) => {
    res.json(student);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});  
