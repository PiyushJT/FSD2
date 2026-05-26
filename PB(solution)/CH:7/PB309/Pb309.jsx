// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for React Js, Node Js and Express Js and 
// routing functionality.
// Create components for each links and add heading "React JS","Node JS" and "Express JS" in 
// component files Ex1.js, Ex2.js and EX3.js respectively. 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
function PB309() {
    return (
        <Router>    
            <div>
                <h1 style={{ color: 'blue' }}>pb309</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/react">React JS</Link>
                        </li>
                        <li>
                            <Link to="/node">Node JS</Link> 
                        </li>
                        <li>
                            <Link to="/express">Express JS</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/react" element={<Ex1 />} />
                    <Route path="/node" element={<Ex2 />} />
                    <Route path="/express" element={<Ex3 />} />
                </Routes>
            </div>
        </Router>
    )
}
export default PB309;