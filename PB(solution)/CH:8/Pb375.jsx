// Create a react app using function component to display image of flower
// using AXIOS to make API request. Use API Url
// (https://flower.ceo/api/image/random). Key name in API which store image
// is “sample”.
import { useState } from 'react';
import axios from 'axios';
function Pb370() {
    const [imageUrl, setImageUrl] = useState("");
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb370</h1>
            <img src={imageUrl} alt="Random Flower" style={{ width: '300px', height: '300px' }} />
            <br />
            <button onClick={() => {
                axios.get("https://flower.ceo/api/image/random")
                    .then(response => setImageUrl(response.data.sample))
                    .catch(error => console.error("Error fetching image:", error));
            }}>
                Get Random Flower Image
            </button>
        </div>
    );
}
export default Pb370;