// write react js to display alert box with text "welcome to lju" by click button provide css to button like color background color and padding and border radius
function E1() {
    const handleClick = () => {
        alert("Welcome to LJU");
    };
    return (
        <div>
            <button onClick={handleClick} style={{
                color: 'white',
                backgroundColor: 'blue',
                padding: '10px',
                margin: '10px',
            }}>
                Click Me    
            </button>
        </div>
    );
}   
export default E1;  
            