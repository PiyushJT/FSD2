// Create a program to build React app having buttons to increment and
// decrement the number by clicking that respective button. Also, increment of
// the number should be performed only if number is less than 10 and
// decrement of the number should be performed if number is greater than 0.
import { useState } from 'react';
function Pb364() {
    const [number, setNumber] = useState(0);
    const handleIncrement = () => {
        setNumber(number => number < 10 ? number + 1 : number);
    }
    const handleDecrement = () => {
        setNumber(number => number > 0 ? number - 1 : number);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb364</h1>
            <h2>Number: {number}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}
export default Pb364;