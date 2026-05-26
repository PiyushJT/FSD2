// Write a program to build React app having a button which increase count by 1 while
// clicking it.
import { useState } from 'react'
function US1() {
    const [count, setCount] = useState(0)
    function increaseCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}   
export default US1