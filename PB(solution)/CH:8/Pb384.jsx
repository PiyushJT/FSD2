// Create a React app:
// • Add one textarea
// • Display live character count below it
// • If characters exceed 100, text color becomes red
import { useState } from 'react';
function Pb384() {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb384</h1>
            <textarea value={text} onChange={handleChange} />
            <h2 style={{ color: text.length > 100 ? 'red' : 'black' }}>Character Count: {text.length}</h2>
        </div>
    );
}
export default Pb384;