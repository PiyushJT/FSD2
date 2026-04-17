const express = require('express');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home Page</h1><form action='/submit' method='post'><input type='text' name='name' ><button type='submit'>Submit</button></form>");
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(name);
});     
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});    