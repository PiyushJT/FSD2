// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from 
// the array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. Pass values 
// as props.
function PB305(props) {
    const filteredNumbers = props.numbers.filter(num => num >= 10);
    return (
        <div>
            <h2>Filtered Numbers: {filteredNumbers.join(", ")}</h2>
        </div>
    )
}
export default PB305;