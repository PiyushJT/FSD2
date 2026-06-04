// Write a program to build React app having 2 input number fields (Number 1
// and Number 2) and display the entered value on the same page. And then
// click on add button to calculate the addition of two numbers. Display the
// addition in h2 tag
import { useState } from 'react';
function Pb361() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleNumber1Change = (event) => {
        setNumber1(Number(event.target.value));
    };

    const handleNumber2Change = (event) => {
        setNumber2(Number(event.target.value));
    };

    const handleAdd = () => {
        setSum(number1 + number2);
    };

    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb361</h1>
            <input
                type="number"
                onChange={handleNumber1Change}
            />
            <input
                type="number"
                onChange={handleNumber2Change}
            />
            <button onClick={handleAdd}>Add</button>
            <h2>Sum: {sum}</h2>
        </div>
    );
}
export default Pb361;   
    