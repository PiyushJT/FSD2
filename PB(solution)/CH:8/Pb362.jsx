// Write a program to build React app to perform the tasks as asked below.
// •	Add a button “Change Text”.
// •	Add “Hello” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “How are
// you?” and vice versa.
import { useState } from 'react';
function Pb362() {
    const [text, setText] = useState("Hello");  
    const handleChangeText = () => {
        setText(text => text === "Hello" ? "How are you?" : "Hello");
    }   
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb362</h1>
            <h2>{text}</h2>
            <button onClick={handleChangeText}>Change Text</button>
        </div>
    );
}   
export default Pb362;