// Create react app to perform tasks as asked.
//         First create files as asked below in routing folder
// 1.        Home.js - for the home page content
// 2.        Shop.js - for the shop page content
// 3.        Contact.js - for the contact page content
// 4.        Nopage.js - for the page other than mentioned links
// Create Main.js file which contains Links for Home, Shop and Product page. Also, add 
// functionality of page routing.
// Finally call Main.js in App.js.
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import Product from './Shop';
import Contact from './Contact';
import Nopage from './Nopage';
function PB302() {
    return (
        <Router>
            <div>
                <h1 style={{ color: 'blue' }}>pb302</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </div>
        </Router>
    )
}
export default PB302;