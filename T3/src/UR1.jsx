// write a react component to increse a value by 5 while clicking on button intialized value with 20 use reducer to perform this task 
import { useReducer } from 'react';
function reducer(state, action) {
    return state+action 
}
function UR1() {
    const [state, dispatch] = useReducer(reducer, 20);
    return (
        <div>
            <h1>Value: {state}</h1>
            <button onClick={() => dispatch(5)}>Increase by 5</button>
        </div>
    );
}
export default UR1;