// Write react js script to display alert box with text “You clicked submit.” only on submitting
// form.
function E4() {
    const handleSubmit = () => {
        
        alert("You clicked submit.");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default E4;