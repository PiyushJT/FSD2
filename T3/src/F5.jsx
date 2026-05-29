// Build a React component called Calculator that performs basic arithmetic operations using a single state object.
// •	Two number inputs (num1, num2) and a dropdown to select operation (add, sub, mul, div)
// •	All fields are required
// •	Use useState with one object for all inputs
// •	On form submit:
// o	Validate all fields
// o	Prevent divide by zero
// o	Show result using alert()
import {useState} from 'react'
function F5() {
    const [data, setData] = useState({ num1: "", num2: "", operation: "" });
    function handleChange(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const { num1, num2, operation } = data;
        if (!num1 || !num2 || !operation) {
            alert("All fields are required.");
            return;
        }
        if (operation === "div" && parseFloat(num2) === 0) {
            alert("Error: Cannot divide by zero.");
            return;
        }
        let result;
        if (operation === "add") {
            result = parseFloat(num1) + parseFloat(num2);
        }
        else if (operation === "sub") {
            result = parseFloat(num1) - parseFloat(num2);
        }
        else if (operation === "mul") {
            result = parseFloat(num1) * parseFloat(num2);
        }
        else if (operation === "div") {
            result = parseFloat(num1) / parseFloat(num2);
        }
        alert("Result: " + result);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Calculator</h1>
            <input type="number" name="num1" placeholder="Number 1" onChange={handleChange} />
            <input type="number" name="num2" placeholder="Number 2" onChange={handleChange} />
            <select name="operation" onChange={handleChange}>
                <option value="">Select Operation</option>
                <option value="add">Add</option>
                <option value="sub">Subtract</option>
                <option value="mul">Multiply</option>
                <option value="div">Divide</option>
            </select>
            <br />
            <input type="submit" value="Calculate" />
        </form>
    )
}
export default F5;