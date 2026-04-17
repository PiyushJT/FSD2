const express = require('express');
const app = express();  
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<form action='/details' method='post'>Name: <input type='text' name='name'><br>Gender: <input type='radio' name='gender' value='male'> Male <input type='radio' name='gender' value='female'> Female<br>Skill: <input type='checkbox' name='skill' value='Python'> python <input type='checkbox' name='skill' value='React'> React<br>Dept: <select name='dept'><option value='IT'>IT</option><option value='HR'>HR</option></select><br><button type='submit'>Click here</button></form>");
});
app.post('/details', (req, res) => {
    const name = req.body.name; 
    const gender = req.body.gender;
    const skill = req.body.skill;
    const dept = req.body.dept;
    res.send("Name: " + name + "<br>Gender: " + gender + "<br>Skill: " + skill + "<br>Dept: " + dept);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// if valid 