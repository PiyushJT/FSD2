const express = require("express")
const app = express();
app.use(express.static('frontend', { index: 'index6.html' }));

app.listen(5200)