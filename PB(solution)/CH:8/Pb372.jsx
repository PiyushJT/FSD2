// Create React Js app to perform the tasks as asked below.
// -Add button "Click"
// -By clicking on button the value should be incremented by 5. Initial value is
// 20.
// -Use useReducer hook to perform the above tasks
import { useReducer } from "react";
function reducer(state, action) {
    if (action.type === "increment") {  
        return state + 5;
    }
}
function Pb372() {
    const [number, dispatch] = useReducer(reducer, 20);
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb372</h1>
            <h2>Number: {number}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Click</button>
        </div>
    );
}
export default Pb372;   