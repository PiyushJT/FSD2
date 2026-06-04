// Create react app to craete exam form. Fields are as under.
// Name -text,
// Email -email
// Password -password,
// Gender-radio,
// Exam date-datepicker,
// Exam center-dropdown)
// Use useState hook to save the state of the form. Also, add validation for the
// email and password fields. Display submited values.
import { useState } from 'react';
function Pb374() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb374</h1>
            <form onSubmit={(event) => {
                const name = event.target.name.value;
                const email = event.target.email.value;
                const password = event.target.password.value;
                const gender = event.target.gender.value;
                const examDate = event.target.examDate.value;
                const examCenter = event.target.examCenter.value;
                setData([...data, { name, email, password, gender, examDate, examCenter }]);
                alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nGender: " + gender + "\nExam Date: " + examDate + "\nExam Center: " + examCenter);
                event.preventDefault();
            }}>
                
                    Name:
                    <input type="text" id="name" name="name" required />
                    Email:
                    <input type="email" id="email" name="email" required />
                    Password:
                    <input type="password" id="password" name="password" required />
                    Gender:
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                    Exam Date:
                    <input type="date" id="examDate" name="examDate" required />
                    Exam Center:
                    <select id="examCenter" name="examCenter" required>
                        <option value="">Select Exam Center</option>
                        <option value="Center 1">Center 1</option>
                        <option value="Center 2">Center 2</option>
                        <option value="Center 3">Center 3</option>
                    </select>
                    <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Pb374;   