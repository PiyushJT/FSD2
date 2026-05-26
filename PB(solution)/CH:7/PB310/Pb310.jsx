// Create a React app to perform tasks as asked using functional component:
// 1)Create a React Router that includes three routes: Home, Food Items, and Contact and
// implement navigation between these routes. 2)Create a route that displays a Home
// page, Food Items details page and Contact details page. 3) When a user clicks on
// Home page it should navigate to the home page and display “Welcome to LJU” in bold
// in the h1 heading. When a user clicks on a Food Items page, it should navigate to the
// Food Items Detail page and display three products&#39; information with name, price and
// description using props. And when the user clicks on Contact page it should navigate to
// contact details page and display contact information with blue color font.
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import FoodItems from './FoodItems';
import Contact from './Contact';
function PB310() {
    return (
        <Router>
            <div>
                <h1 style={{ color: 'blue' }}>pb310</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/food">Food Items</Link>
                        </li>
                        <li>    
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/food" element={<FoodItems />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}
export default PB310;