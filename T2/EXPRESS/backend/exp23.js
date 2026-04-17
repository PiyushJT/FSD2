const express = require("express")
const app = express();
const path = require("path");
staticpath = path.join(__dirname, "../frontend");
app.use(express.static(staticpath, { index: 'index6.html' }));

app.listen(5200)
