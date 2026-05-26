// Create a program to build React app having buttons to increment and decrement the
// number by clicking that respective button. Also, increment of the number should be
// performed only if number is less than 10 and decrement of the number should be
// performed if number is greater than 0.
import { useState } from 'react'
function US2() {
    const [count, setCount] = useState(0)
    function increaseCount() {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    function decreaseCount() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    )
}
export default US2