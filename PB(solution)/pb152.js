// Write an ExpressJS to take a textarea & submit button. After clicking
// submit button the content of textarea should be represented on next
// page by writing each sentence (separated by dot) in new line
// input= hii.hello.how are you
// output= hii
//         hello
//         how are you
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<h1>Enter Text</h1><form action='/submit' method='post'><textarea name='text' rows='4' cols='50'></textarea><br><button type='submit'>Submit</button></form>");
});
app.post('/submit', (req, res) => {
    const text = req.body.text;
    var lines = text.split('.');
    var output = lines.join('<br>');
    res.send('<h1>' + output + '</h1>')
});
app.listen(3000)
