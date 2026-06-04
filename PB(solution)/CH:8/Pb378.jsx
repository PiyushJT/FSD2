// Create a React app with two components using functional component:
// Parent and Child. Use useContext to pass two colors from the Parent
// component to the Child component. The Child component should display
// the received color as its background(red) and other color(green) on its font
// to display “Welcome to LJU”
import { createContext } from 'react';
import Pb378c from './Pb378_c.jsx';
const ColorContext = createContext();
function Pb378() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb378</h1>
            <ColorContext.Provider value={{ backgroundColor: 'red', fontColor: 'green' }}>
                <Pb378c />
            </ColorContext.Provider>
        </div>
    );
}
export default Pb378;
export { ColorContext };