// Write a program to build React app having 2 input text fields (First name
// and last name) and display the entered value on the same page.
import { useState } from 'react';
function Pb358() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb358</h1>
            <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
        </div>
    );
}
export default Pb358;