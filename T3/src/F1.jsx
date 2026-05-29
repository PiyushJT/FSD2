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
            <textarea value={name} onChange={(e) => setName(e.target.value)} />
            <input type="submit" />
        </form>
    )
}
export default F1;