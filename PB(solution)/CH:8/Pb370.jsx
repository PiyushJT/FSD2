// Create a React Form for select any of pizza size using radio button
import { useState } from 'react';
function Pb370() {
    const [size, setSize] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (size) {
            alert("Selected Pizza Size: " + size);
        } else {
            alert("Please select a pizza size.");
        }
    };
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb370</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="pizzaSize"
                            value="Small"
                            onClick={(e) => setSize(e.target.value)}
                        />
                        Small
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="pizzaSize"    
                            value="Medium"
                            onClick={(e) => setSize(e.target.value)}
                        />
                        Medium
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="pizzaSize"
                            value="Large"
                            onClick={(e) => setSize(e.target.value)}
                        />
                        Large
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Pb370;