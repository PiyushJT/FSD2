// Write a program to build React app to perform the tasks as asked below.
//  Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
//  Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in
// h2 tag.
//  By clicking on “Change text” button text should be changed to “Welcome students”
// and vice versa.
//  By clicking on “Change Color” button change color of text to “blue” and vice versa.
// This color change should be performed while double clicking on the button.
//  Initially button text should be “Hide”. While clicking on it the button text should be
// changed to “Show” and text “React Js Hooks” will not be shown.
import { useState } from 'react'
function US4() {
    const [text, setText] = useState("LJ University")
    const [color, setColor] = useState("red")
    const [isVisible, setIsVisible] = useState(true)
    function changeText() {
        if (text === "LJ University") {
            setText("Welcome students")
        } else {
            setText("LJ University")
        }   
    }
    function changeColor() {
        if (color === "red") {
            setColor("blue")
        } else {
            setColor("red")
        }
    }   
    function hideShow() {
        setIsVisible(!isVisible)
    }
    return (
        <div>
            <h1 style={{ color: color }}>{text}</h1>    
            {isVisible && <h2>React Js Hooks</h2>}
            <button onClick={changeText}>Change Text</button>
            <button onDoubleClick={changeColor}>Change Color</button>
            <button onClick={hideShow}>{isVisible ? "Hide" : "Show"}</button>
        </div>
    )
}
export default US4