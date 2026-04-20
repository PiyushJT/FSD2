const express = require("express")
const app = express();
const path = require("path");
css_path= path.join(__dirname, "../css");
html_path = path.join(__dirname, "../html");
img_path = path.join(__dirname, "../img");
app.use(express.static(css_path));
app.use(express.static(html_path,{index: 'index7.html'}));
app.use(express.static(img_path));
app.listen(5200);
