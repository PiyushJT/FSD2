// Write react js script to display alert box with text “welcome to lju” only on
// double click button
function PB301() {
    const handleDoubleClick = () => {
        alert("Welcome to LJU");
    }
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb301</h1>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>

        </div>
    )
}
export default PB301;