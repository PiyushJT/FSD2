// write Express JS to defind one JSON array of 3 object having property name and age of singer 
//  sort this object according to age  if user request sorted name in url 
// then all name along with age should be printed according to desending order of age display
//  this sorted value on sort page and json object on home page 
var singers = [
    { name: "Singer A", age: 30 },
    { name: "Singer B", age: 25 },  
    { name: "Singer C", age: 35 }   
];  
var express = require('express');
var app = express();    
app.get('/', (req, res) => {
    res.send(singers);
});
app.get('/sort', (req, res) => {
    const sorted = singers.sort((a, b) => b.age - a.age);
    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = sorted[i].name + " " + sorted[i].age;
    }
    res.type("text/plain");
    res.send(sorted.join("\n"));
}); 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});