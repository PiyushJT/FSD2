// Write a program to build React app having text and button to show and
// hide the text. 
import { useState } from 'react';
function Pb360() {
    const [show, setShow] = useState(true);
    const handleToggleShow = () => {
        setShow(show => !show);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb360</h1>
            <h2>{show && "This is some text to show or hide."}</h2>
            <button onClick={handleToggleShow}>
                {show ? "Hide" : "Show"}    
            </button>
        </div>
    );
}
export default Pb360;