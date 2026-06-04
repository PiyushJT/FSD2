// Write a program to build React app having a button which increase count
// by 1 while clicking it. (useState)
import { useState } from 'react';
function Pb363() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count => count + 1);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb363</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
export default Pb363;
