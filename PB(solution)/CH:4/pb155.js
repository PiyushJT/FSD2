// Write an express.js script to define one JSON array of 3 objects
// having members ‘name’ and ‘score’. score must be sorted descending
// order according to name
const express = require('express');
const app = express();
const data = [  
    { name: 'Alice', score: 85 },   
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];
data.sort((a, b) => b.score - a.score); 
app.get('/', (req, res) => {
    res.json(data);
}); 
app.listen(3000)