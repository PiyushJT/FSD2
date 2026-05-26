// Write a program to build React app having a button which changes image by clicking it.
import { useState } from 'react'
function US5() {
    const [image, setImage] = useState("https://thf.bing.com/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?w=315&h=177&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3")
    function changeImage() {
        if (image === "https://thf.bing.com/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?w=315&h=177&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3") {
            setImage("https://tse2.mm.bing.net/th/id/OIP.sN7zXFhxCF5nuXoreDGdrwHaHa?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3")
        } else {
            setImage("https://thf.bing.com/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?w=315&h=177&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3")
        }
    }
    return (
        <div>
            <img src={image} alt="Image" />
            <br />
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}
export default US5;