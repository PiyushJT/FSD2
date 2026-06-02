// create a  react js use statereducer to display product quatity add button to add item and remove item qauntity should never go below zero 
import { useReducer } from 'react';
function reducer(state, action) {
    if (action.type === 'increment') {
        return state + 1;
    }
    else if (action.type === 'decrement') {
        if (state>0){
             return state - 1;
        }
        
    }
    return state;
}
function UR3() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1>Value: {state}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>add </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>remove</button>
        </div>
    );
}
 export default UR3;