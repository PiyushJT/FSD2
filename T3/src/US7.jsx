// Create a React component that manages multiple form input fields using a single state
// object and displays the values in real-time
// in form first name last name and email and display the value in real time
import { useState } from 'react'
function US7() {
    const [data, setdata] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    };
    return (
        <div>
            <h1>Form Input</h1>
            <input type="text" name="firstName"  onChange={handleChange} />
            <input type="text" name="lastName"  onChange={handleChange} />
            <input type="email" name="email"  onChange={handleChange} />
            <h2>First Name: {data.firstName}</h2>
            <h2>Last Name: {data.lastName}</h2>
            <h2>Email: {data.email}</h2>
        </div>
    )
}
export default US7

