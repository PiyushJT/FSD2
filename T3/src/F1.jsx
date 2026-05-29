import { useState } from 'react';
function F1() {
    const [name, setName] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        alert("your name is " + name);
    }
    return (
        <form onSubmit={handleSubmit}>
            Enter your name:
            {/* <textarea value={name} onChange={(e) => setName(e.target.value)} /> */}
            <select value={name} onChange={(e) => setName(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
            <input type="submit" />
        </form>
    )
}
export default F1;
