// create a  react js app using useReducer to increase a value by 1 while click on button increment and decrease value by 1 while click on button decrement initialized value with 0
import { useReducer } from 'react';
function reducer(state, action) {
    if (action.type === 'increment') {
        return state + 1;
    }
    else if (action.type === 'decrement') {
        return state - 1;
    }
    return state;
}
function UR2() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>Value: {state}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}
 export default UR2;