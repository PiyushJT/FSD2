// create a webserver that accepts a get request with dynamic user id in the url also accepts additional data name and age using query parameter extract id from root parameter , name and age from query string return a json response containg all recieved data
url = "http://localhost:3000/user/123?name=John&age=30"
const express = require('express');
const app = express();  
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    const age = req.query.age;
    res.json({ id: id, name: name, age: age });
});
app.listen(3000, () => {
    console.log("Server is running ");
});