// Write React component having a button and image. By clicking on button, image changes
// randomly from a given array of images url.
import { useState } from 'react'
function US6() {
    const images = ["https://cdnb.artstation.com/p/marketplace/presentation_assets/003/430/263/large/file.jpg?1706950302","https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/262/large/file.jpg?1706950301","https://tse1.mm.bing.net/th/id/OIP.b_3bLapZNSi8tkFJ2Kr88wHaHa?cb=thfc1falcon&pid=ImgDet&w=191&h=191&c=7&o=7&rm=3","https://tse1.mm.bing.net/th/id/OIP.i4N33BGIeau9jurCpPWX5QHaHM?cb=thfc1falcon&pid=ImgDet&w=191&h=185&c=7&o=7&rm=3","https://tse4.mm.bing.net/th/id/OIP.5bj8yYKrMKxgvkFV4d_dkwHaHa?cb=thfc1falcon&pid=ImgDet&w=191&h=191&c=7&o=7&rm=3"]

    const [image, setImage] = useState(images[0])
    function changeImage() {
        const randomIndex = Math.floor(Math.random() * images.length)
        setImage(images[randomIndex])
    }
    return (
        <div>
            <img src={image} alt="Random Image" />
            <br />
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}
export default US6;