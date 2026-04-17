student = {
    u1: [{ name: "LJU", id: 2 },
    { name: "LJU2", id: 3 },
    { name: "LJU3", id: 4 },]
}
// convert in table format in output
var express = require('express');
var app = express();
app.get("/student", (req, res) => {
    res.set("content-type", "text/html")
    res.write("<table  border='1px solid'><tr><th>Name</th><th>ID</th></tr>")
    for (i of student.u1) {
        res.write("<tr><td>" + i.name + "</td>")
        res.write("<td>" + i.id + "</td></tr>")
    }
    res.write("</table>")
    res.send()
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})