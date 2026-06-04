// Create React Js app to perform the tasks as asked below.
// -Add buttons "increment" and "decrement"
// -By clicking on increment button the value should be incremented by 1 and
// by clicking on decrement button value should be decremented by 1.
// -Use useReducer hook to perform the above tasks.
import { useReducer } from "react";
function reducer(state, action) {
        if (action.type === "increment") {
            return state + 1;
        }
        if (action.type === "decrement") {
            return state - 1;
        }
        
    
}
function Pb371() {
    const [number, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb371</h1>
            <h2>Number: {number}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
    );
}
export default Pb371;