// Write react js script to display alert box with text “Welcome to LJU” by clicking
// on button
function PB299() {
    const handleClick = () => {
        alert("Welcome to LJU");
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb299</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default PB299;