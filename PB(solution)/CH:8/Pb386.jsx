// Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state
import { useReducer } from 'react';
function reducer(state, action) {
    if (action.type === 'add') {
        return { quantity: state.quantity + 1 };
    }
    if (action.type === 'remove') {
        return { quantity: state.quantity > 0 ? state.quantity - 1 : 0 };
    }
    return state;
}
function Pb386() {
    const [state, dispatch] = useReducer(reducer, { quantity: 0 }); 
    const handleAddItem = () => {
        dispatch({ type: 'add' });
    }
    const handleRemoveItem = () => {
        dispatch({ type: 'remove' });
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb386</h1>
            <h2>Quantity: {state.quantity}</h2>
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={handleRemoveItem}>Remove Item</button> 
        </div>
    );
}export default Pb386;