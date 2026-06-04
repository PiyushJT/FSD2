// Create a React app:
// • Add two buttons “Dark Mode” and “Light Mode”
// • Initially background should be white and text black
// • On clicking “Dark Mode” change background to black and text to white
// • On clicking “Light Mode” revert back
import { useState } from 'react';
function Pb383() {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(true);
    }   
    const handleLightMode = () => {
        setDarkMode(false);
    }
    const appStyle = {
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black', 
    };
    return (
        <div style={appStyle}>
            <h1>Dark Mode Example</h1>
            <button onClick={handleDarkMode}>Dark Mode</button>
            <button onClick={handleLightMode}>Light Mode</button>
        </div>
    );
}
export default Pb383;