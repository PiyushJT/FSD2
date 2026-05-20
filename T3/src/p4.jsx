function P4(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Roll Number: {props.rollNum}</p>
            <p>Mark: {props.mark + 1}</p>
        </div>
    );
}
export default P4;