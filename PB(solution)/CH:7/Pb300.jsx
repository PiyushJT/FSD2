//  Write react js script to display values in console while changing it in text box.
// write a react js to display valuse in console while changing it in text box
function PB300() {
    const handleChange = (event) => {
        console.log(event.target.value);
        document.getElementById("output").innerText = event.target.value;
    };
    return (
        <div>
                <h1 style={{ color: 'blue' }}>pb300</h1>
            <input type="text" onChange={handleChange}  />
            <p id="output"></p>
        </div>
    );
}
export default PB300;