// Create react app which to perform following task using function
// component:
// •	Create one main file name F1.js & other 2 component files F2.js & F3.js.
// •	Main file contains form with following fields:
// o	First Name (Input type text)
// o	Last Name (Input type text)
// o	Message (Textarea)
// o	City (Dropdown)
// o	Gender (Radio Button)
// •	Pass values of all fields from F1.js file to F3.js file. And display all
// submitted values in alert box using useContext & useState hook.
// No need to write App.js file.
import { useState, createContext } from 'react';
import Pb381c from './Pb381c.jsx';
const FormDataContext = createContext();
function Pb381() {
    const [formData, setFormData] = useState({  
        firstName: '',
        lastName: '',
        message: '',
        city: '',
        gender: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            message: event.target.message.value,
            city: event.target.city.value,
            gender: event.target.gender.value
        };
        setFormData(data);
        // alert("First Name: " + data.firstName + "\nLast Name: " + data.lastName + "\nMessage: " + data.message + "\nCity: " + data.city + "\nGender: " + data.gender);
    };  
    return (
         <div>   
                <h1 style={{ color: 'blue' }}>pb381</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" required />
                    <input type="text" name="lastName" placeholder="Last Name" required />
                    <textarea name="message" placeholder="Message" required />
                    <select name="city" required>
                        <option value="">Select City</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                    <div>
                        <label>
                            <input type="radio" name="gender" value="Male" required /> Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" required /> Female
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                 <FormDataContext.Provider value={formData}>
                    <Pb381c />
                 </FormDataContext.Provider>
            </div>
       
    );
}
export default Pb381;
export { FormDataContext };