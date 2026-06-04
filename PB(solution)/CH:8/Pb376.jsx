// Create a Student Data Entry Form using React. Fields are Student Name
// (input Field), Gender (Radio Button values are Boy, Girl), Subjects
// (Dropdown values are English, Gujarati), Comments (textarea). When the
// user Click on the Submit button , it will display an alert and use useState
// hook
import { useState } from 'react';
function Pb375() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb375</h1>
            <form onSubmit={(event) => {
                const name = event.target.name.value;
                const gender = event.target.gender.value;
                const subject = event.target.subject.value;
                const comments = event.target.comments.value;
                setData([...data, { name, gender, subject, comments }]);
                alert("Name: " + name + "\nGender: " + gender + "\nSubject: " + subject + "\nComments: " + comments);
                event.preventDefault();
            }}>
                Name:
                <input type="text" id="name" name="name" required />
                Gender:
                <label>
                    <input type="radio" id="boy" name="gender" value="Boy" required />
                    Boy
                </label>
                <label>
                    <input type="radio" id="girl" name="gender" value="Girl" required />
                    Girl
                </label>
                Subjects:
                <select id="subject" name="subject" required>
                    <option value="">Select Subject</option>
                    <option value="English">English</option>
                    <option value="Gujarati">Gujarati</option>
                </select>
                Comments:
                <textarea id="comments" name="comments" required></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Pb375;