// Write a program to build React app to perform the tasks as asked below.
//  Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
//  Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in
// h2 tag.
//  By clicking on “Change text” button text should be changed to “Welcome students”
// and vice versa.

import { useState } from 'react'
function US3() {
    const [text, setText] = useState("LJ University")
    // only change text
    function changeText() {
        if (text === "LJ University") {
            setText("Welcome students")
        } else {
            setText("LJ University")
        }
    }   
      return (
        <div>
            <h1 >{text}</h1>
            <h2>React Js Hooks</h2>
            <button onClick={changeText}>Change Text</button>
        </div>
    )
}   
export default US3