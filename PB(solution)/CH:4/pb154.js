// Write an express.js script to define one JSON array of 3 objects
// having members
// ‘name’ and ‘height’. height must be sorted descending order
// according to name.
const express = require('express');
const app = express();
const data = [  
    { name: 'Alice', height: 165 },
    { name: 'Bob', height: 180 },
    { name: 'Charlie', height: 175 }
];
data.sort((a, b) => b.height - a.height);
app.get('/', (req, res) => {
    res.json(data);
});
app.listen(3000)