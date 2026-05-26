// Write a react.js file to pass an integer value to a component, which is defined as a property in 
// app.js file. Fetch that value in component and print its table on console. Write all necessary 
// files i.e. App.js and Component.js. Perform task by function component.
import Component from './Pb314_Component';
function PB314() {
    const value = 5; // Example integer value to pass to the component
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb314</h1>
            <Component value={value} />
        </div>
        

       
    )
}
export default PB314;