// create a component to perform the task as described 1. add a text filed and a submit button while chnaging the value in the text field display it below the form display this text filed value in an alert box upon submiting it 2. add a button to perform click and double click event on click event display massage in h3 tag view "click once" on double h3 click view "double click" massage should be display below the button .
function Task() {
    const Submit = () => {
        alert(document.getElementById("textField").value);
    }
    const Click = () => {
        document.getElementById("message").innerText = "click once";
    }
    const DoubleClick = () => {
        document.getElementById("heading").innerText = "double click";
    }
    const Change = (event) => {
        document.getElementById("display").innerText = event.target.value;
    };
    return (
        <div>
            <h1>Task 2</h1>
            <input type="text" id="textField" onChange={Change} />
            <button onClick={Submit}>Submit</button>
            <p id="display"></p>
            <button onClick={Click} onDoubleClick={DoubleClick}>Click Me</button>
            <h3 id="message" style={{ color: 'blue' }}></h3>
            <h2 id="heading" style={{ color: 'red' }}></h2>
        </div>
    )
}
export default Task
