const express = require('express');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
res.send("<h1>Avg</h1><form action='/result' method='post'>T1:<input type='number' name='num1' ></br>T2:<input type='number' name='num2' ></br>T3:<input type='number' name='num3' ></br><button type='submit'>Avg</button></form>");       
});
app.post('/result', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const num3 = parseInt(req.body.num3);
    const avg = (num1 + num2 + num3) / 3;
    res.send("Average: " + avg);
}); 
app.listen(3000, () => {        
    console.log("Server is running on port 3000");
});