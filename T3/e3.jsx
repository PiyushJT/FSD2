// alert box on double click
function E3() {
    const handleDoubleClick = () => {
        alert("You double clicked the button!");
    };
    return (
        <div>
            <button onDoubleClick={handleDoubleClick} style={{
                color: 'white',
                backgroundColor: 'green',
                padding: '10px',
                margin: '10px',
            }}>
                Double Click Me    
            </button>
        </div>
    );
}
export default E3;