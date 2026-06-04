// Create a Sign-up form using React asking for username, age, email,
// password, and confirm password. When the user clicks on the ‘submit’
// button, it will display an alert box with a username, age, and email details
// entered by the user.
import { useState } from 'react';
function Pb368() {
    const [data, setData] = useState([]);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb368</h1>
            <form onSubmit={(event) => {
                const username = event.target.username.value;
                const age = event.target.age.value;
                const email = event.target.email.value;
                setData([...data, { username, age, email }]);
                alert("Username: " + username + "\nAge: " + age + "\nEmail: " + email);
                event.preventDefault();
            }}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Pb368;