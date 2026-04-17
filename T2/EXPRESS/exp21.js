const express = require("express")
const app = express();
app.use(express.static(__dirname, { index: 'index5.html' }));

app.listen(5200)