// Create react app which contains form with following fields.
// •	First Name(Input type text)
// •	Email(Input type email)
// •	Password(Input type password)
// •	Confirm Password(Input type password)
// •	Message (Textarea)
// •	Gender(Radio Button)
// •	City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)
import { useState } from 'react';
function F3() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nConfirm Password: " + confirmPassword + "\nMessage: " + message + "\nGender: " + gender + "\nCity: " + city);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            fname: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            confirm password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />
            message: <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <br />
            gender: <input type="radio" value="male" name="gender" onChange={(e) => setGender(e.target.value)} /> Male
            <input type="radio" value="female" name="gender" onChange={(e) => setGender(e.target.value)} /> Female
            <input type="radio" value="other" name="gender" onChange={(e) => setGender(e.target.value)} /> Other
            <br />
            city: <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>   
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
            </select>
            <br />
            <input type="submit" /> 
        </form>
    )
}
export default F3;