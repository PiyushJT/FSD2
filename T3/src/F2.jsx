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
    const [data, setdata] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("Name: " + data.name + "\nEmail: " + data.email + "\nPassword: " + data.password + "\nConfirm Password: " + data.confirmPassword + "\nMessage: " + data.message + "\nGender: " + data
            .gender + "\nCity: " + data.city);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            fname: <input type="text" name="name" onChange={handleChange} />
            <br />
            email: <input type="email" name="email" onChange={handleChange} />
            <br />
            password: <input type="password" name="password" onChange={handleChange} />
            <br />
            confirm password: <input type="password" name="confirmPassword" onChange={handleChange} />
            <br />
            message: <textarea name="message" onChange={handleChange} />
            <br />
            gender:
            <input type="radio" value="male" name="gender" onChange={handleChange} />   
            Male
            <input type="radio" value="female" name="gender" onChange={handleChange} /> 
            Female
            <input type="radio" value="other" name="gender" onChange={handleChange} /> 
            Other
            <br />  
            city: <select name="city" onChange={handleChange}>
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