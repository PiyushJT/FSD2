// Create react app  using function component to perform tasks as asked. 
// First create files as asked below in folder named “ component”
// 1. Login.js - for the login page content
// 2. Product.js - for the Product page content
// 3. Contact.js - for the contact page content
// 4. About.js - for the about page content
// Create Home.js file which contains Links for Login,Product,Contact and About page. Also, add 
// functionality of page routing.
// Finally call Home.js in App.js.
// Write code for All necessary files.
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Login from './Login';
import Product from './Product';
import Contact from './Contact';
import About from './About';
function PB313() {
    return (
        <Router>
            <div>
                <h1 style={{ color: 'blue' }}>pb313</h1>
                <nav>
                    <ul>

                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}

export default PB313;