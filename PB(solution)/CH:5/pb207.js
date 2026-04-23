// Write an ExpressJS script to perform the following tasks:
// Create one HTML file that contains:
// Product Price (number input)
// Discount Percentage (number input)
// One dropdown (Festival Offer, Seasonal Offer, Clearance Sale)
// One submit button
// Validation Rules:
// Price and Discount must be greater than 0
// Otherwise display message:
// "Enter valid price and discount"
// User must select an offer from dropdown
// Otherwise display:
// "Please select an offer type"
// (Messages will be displayed on /discount page)
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));    
app.get('/', (req, res) => {
    res.send(`
        <form action="/discount" method="post"> 
            <label for="price">Product Price:</label>
            <input type="number" id="price" name="price" required><br><br>
            <label for="discount">Discount Percentage:</label>  
            <input type="number" id="discount" name="discount" required><br><br>
            <label for="offer">Select Offer:</label>
            <select id="offer" name="offer" >
                <option value="">--Select an offer--</option>
                <option value="Festival Offer">Festival Offer</option>
                <option value="Seasonal Offer">Seasonal Offer</option>      
                <option value="Clearance Sale">Clearance Sale</option>
            </select><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});
app.post('/discount', (req, res) => {
    const price = parseFloat(req.body.price);
    const discount = parseFloat(req.body.discount);
    const offer = req.body.offer;
    if (isNaN(price) || isNaN(discount) || price <= 0 || discount <= 0) {
        res.send('Enter valid price and discount');
    } else if (!offer) {
        res.send('Please select an offer type');
    } else {
        const discountedPrice = price - (price * discount / 100);
        res.send("Discounted Price: " + discountedPrice.toFixed(2));
    }
});
app.listen(3000)