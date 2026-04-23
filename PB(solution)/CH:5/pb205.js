// Write an ExpressJS script using RESTapi to create one array of json
// object named student_result which have properties like Name,
// Roll_no, Division, Percentage & Grade. Once user request for
// “/result” page it displays all student’s data. If user request for
// particular Roll_no then respective students data will display i.e. if
// user request for “/result/2” then data of Roll_no 2 will display
const express = require('express');
const app = express();

const student_result = [
    { Name: 'Alice', Roll_no: 1, Division: 'A', Percentage: 85, Grade: 'A' },
    { Name: 'Bob', Roll_no: 2, Division: 'B', Percentage: 75, Grade: 'B' },
    { Name: 'Charlie', Roll_no: 3, Division: 'C', Percentage: 65, Grade: 'C' },
];         
app.get('/result', (req, res) => {
    res.json(student_result);
});

app.get('/result/:roll_no', (req, res) => {
    const roll_no = parseInt(req.params.roll_no);
    const student = student_result.find(s => s.Roll_no === roll_no);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}); 
app.listen(3000)