// Write an expressJS code in which RESTapi is created for json object named data which
// contains name,id,branch,city and contact properties.
// ✓ On “/api” page it should display all the content.
// ✓ Upon passing id on the browser url it should display the content having that id. (i.e. on
// localhost:7899/api/101)
// ✓ Upon passing branch on the browser url it should display the content having that
// branch. (i.e. on localhost:7899/api/cse)
const express = require('express');
const router = express.Router();

const data = [  
    { id: 101, name: 'John Doe', branch: 'CSE', city: 'New York', contact: '1234567890' },  
    { id: 102, name: 'Jane Smith', branch: 'ECE', city: 'Los Angeles', contact: '9876543210' },  
    { id: 103, name: 'Alice Johnson', branch: 'ME', city: 'Chicago', contact: '5555555555' },  
    { id: 104, name: 'Bob Brown', branch: 'CSE', city: 'Houston', contact: '1111111111' }  
];

// Route to display all content
router.get('/api', (req, res) => {
    res.json(data);
});
// Route to display content by id
router.get('/api/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = data.find(item => item.id === id);
    if (result) {
        res.json(result);
    } else {
        res.send("Data not found");
    }
});
// Route to display content by branch
router.get('/api/branch/:branch', (req, res) => {
    const branch = req.params.branch.toUpperCase();
    const result = data.filter(item => item.branch.toUpperCase() === branch);
    if (result.length > 0) {
        res.json(result);
    } else {
        res.send("Data not found");
    }
});
module.exports = router;
