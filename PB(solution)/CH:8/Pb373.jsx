// Create a react app to generate random joke using AXIOS to make API
// request
import { useState } from 'react';
import axios from 'axios';
function Pb373() {
    const [joke, setJoke] = useState("");
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb373</h1>
            <h2>{joke}</h2>
            <button onClick={() => {
                axios.get("https://api.chucknorris.io/jokes/random")
                    .then(response => setJoke(response.data.value))
                    .catch(error => console.error("Error fetching joke:", error));
            }}>
                Get Random Joke
            </button>
        </div>
    );
}
export default Pb373;