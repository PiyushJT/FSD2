// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for home and about page and routing 
// functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE)
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import About from './About';
function PB304() {
    return (
        <Router>
            <div>
                <h1 style={{ color: 'blue' }}>pb304</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}
export default PB304;