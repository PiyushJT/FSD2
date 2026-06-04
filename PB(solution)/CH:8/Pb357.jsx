// Write a program to build React app having a button which changes image
// by clicking it. (Add two images)
import { useState } from 'react';
function Pb357() {
    const img1 = "https://pixabay.com/images/search/wild%20animals/";
    const img2 = "https://via.placeholder.com/400x250.png?text=Image+2";
    const [image, setImage] = useState(img1);
    const handleChangeImage = () => {
        setImage(image => image === img1 ? img2 : img1);
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb357</h1>
            <img src={image} alt="Image" />
            <br />
            <button onClick={handleChangeImage}>Change Image</button>
        </div>
    );
}
export default Pb357;