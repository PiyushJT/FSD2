// Build a survey form with radio buttons, and dropdowns. display selected
// results on the alert box on user responses using React JS Hooks.( App.js
// file not required).
import { useState } from 'react';
function Pb377() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb377</h1>
            <form onSubmit={(event) => {
                const name = event.target.name.value;
                const gender = event.target .gender.value;
                const subject = event.target.subject.value;
                setData([...data, { name, gender, subject }]);
                alert("Name: " + name + "\nGender: " +      gender + "\nSubject: " + subject);
                event.preventDefault();
            }}>
                Name:
                <input type="text" id="name" name="name" required />
                Gender:
                <label>
                    <input type="radio" id="male" name="gender" value=" Male" required / >  
                    Male
                </label>
                <label>
                    <input type="radio" id="female" name="gender" value=" Female" required />                  
                    Female
                </label>
                Subjects:
                <select id="subject" name="subject" required>
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Gujarati">Gujarati</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Pb377;   