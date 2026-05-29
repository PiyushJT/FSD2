// Create react app which contains form with fields Name, Email Id, Password and Confirm Password and submit button. 
// 1.	When the form submitted the values of password and confirm password fields must be same else it will give an error message in alert box.  
// 2.	Also, length of the password must be greater than 8 else it will give an error message in alert.
// 3.	If form submitted successfully then display entered name and email id in alert box.
import { useState } from 'react';
function F4() {
    const [data, setdata] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (data.password !== data.confirmPassword) {
            alert("Error: Password and Confirm Password do not match.");
        } else if (data.password.length <= 8) {
            alert("Error: Password must be greater than 8 characters.");
        }
        else {
            alert("Name: " + data.name + "\nEmail: " + data.email);
        }
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
            <input type="submit" />
        </form>
    )
}
export default F4;