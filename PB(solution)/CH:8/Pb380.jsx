// Create a ReactJS program using function component having two input
// fields for num1 and num2 and two buttons for addition and subtraction of
// the two numbers. Display the respective outputs on same page using
// useState hook. Also display alert box as an effect on every time the addition
// button is clicked using useEffect hook.
import { useState, useEffect } from 'react';
function Pb380() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const handleNum1Change = (event) => {
        setNum1(Number(event.target.value));
    }
    const handleNum2Change = (event) => {
        setNum2(Number(event.target.value));
    }
    const handleAddition = () => {
        setResult(num1 + num2);
    }
    const handleSubtraction = () => {
        setResult(num1 - num2);
    }
    useEffect(() => {
        alert("Addition button clicked!");
    }, [result]);
    return (
        <div>   
            <h1 style={{ color: 'blue' }}>pb380</h1>
            <input type="number" placeholder="Number 1" onChange={handleNum1Change} />
            <input type="number" placeholder="Number 2" onChange={handleNum2Change} />
            <button onClick={handleAddition}>Add</button>
            <button onClick={handleSubtraction}>Subtract</button>
            <h2>Result: {result}</h2>
        </div>
    );
}
export default Pb380;