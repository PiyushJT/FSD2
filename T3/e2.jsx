// write a react js to display valuse in console while changing it in text box
function E2() {
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    return (
        <div>
            <input type="text" onChange={handleChange}  />
        </div>
    );
}
export default E2;