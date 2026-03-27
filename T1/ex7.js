// Write node.js script to print “Welcome to Home Page” with two links 
// containing two pages named as “About Us” and “Contact Us” on 
// home page of server. If user request for About Us page it should 
// display “Welcome to LJ University” in bold font-style with blue 
// color and if user request for Contact Us page it should display 
// “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if 
// any other request is requested it shows “Page not found” message in 
// plaintext.
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if (req.url === '/') {
        // Home Page
        res.end(`
            <h1>Welcome to Home Page</h1>
            <a href="/about">About Us</a><br>
            <a href="/contact">Contact Us</a>
        `);
    } else if (req.url === '/about') {
        res.end(`<b style="color:blue;">Welcome to LJ University</b>`);
    } else if (req.url === '/contact') {
        res.end(`<i style="color:red;">Email: abc@ljinstitutes.edu.in</i>`);
    } else {
        res.end(`Page not found`);
    }
});

server.listen(3000)
