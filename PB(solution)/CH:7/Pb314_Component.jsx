// Write a react.js file to pass an integer value to a component, which is defined as a property in 
// app.js file. Fetch that value in component and print its table on console. Write all necessary 
// files i.e. App.js and Component.js. Perform task by function component.
function Component({ value }) {
    console.log("Multiplication Table:");
    for (let i = 1; i <= 10; i++) {
        console.log("" + value + " x " + i + " = " + (value * i));
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>Component Page</h1>
            <p>Check the console to see the multiplication table of {value}.</p>
        </div>
    )
}   
export default Component;