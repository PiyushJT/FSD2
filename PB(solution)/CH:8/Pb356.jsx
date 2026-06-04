// Write a program to build React app to perform the tasks as asked below
// using useState hook.
// •	Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
// •	Add heading “LJ University” in red color(initial) and also add “React Js
// Hooks” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “Welcome
// students” and vice versa.
// •	By clicking on “Change Color” button change color of text to “blue” and
// vice versa. This color change should be performed while double clicking on
// the button.
// •	Initially button text should be “Hide”. While clicking on it the button text
// should be changed to “Show” and text “React Js Hooks” will not be shown
import { useState } from 'react';
function Pb356() {
    const [text, setText] = useState("LJ University");
    const [color, setColor] = useState("red");
    const [show, setShow] = useState(true);
    const handleChangeText = () => {
        setText(text => text === "LJ University" ? "Welcome students" : "LJ University");
    }
    const handleChangeColor = () => {
        setColor(color => color === "red" ? "blue" : "red");
    }
    const handleToggleShow = () => {
        setShow(show => !show);
    }
    return (
        <div>
            <h1 style={{ color: color }}>{text}</h1>
            <h2>{show && "React Js Hooks"}</h2>
            <button onClick={handleChangeText}>Change Text</button>
            <button onDoubleClick={handleChangeColor}>Change Color</button>
            <button onClick={handleToggleShow}>
                {show ? "Hide" : "Show"}
            </button>
        </div>
    );
}
export default Pb356;