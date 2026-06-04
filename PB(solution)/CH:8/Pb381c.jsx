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
import{ useContext } from 'react';
import { FormDataContext } from './Pb381.jsx';
function Pb381c() {
    const formData = useContext(FormDataContext);
    return (
        <div>
            {formData.firstName && formData.lastName && formData.message && formData.city && formData.gender && (
                alert("First Name: " + formData.firstName + "\nLast Name: " + formData.lastName + "\nMessage: " + formData.message + "\nCity: " + formData.city + "\nGender: " + formData.gender)
            )}
        </div>
    );
}   
export default Pb381c;