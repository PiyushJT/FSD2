// Create a React Form for email and password validation
import { useState } from 'react';
function Pb369() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add validation logic here
        if (email && password) {
            alert("Email: " + email + "\nPassword: " + password);
        } else {
            alert("Please enter both email and password.");
        }
    };
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb369</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Email:
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </div>
                <div>
                Password:
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Pb369;