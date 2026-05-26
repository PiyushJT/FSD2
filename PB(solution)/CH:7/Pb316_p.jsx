// Write react js script to perform the tasks as asked below using functional component:
// 1)Add an array of objects which contains name and age of people. 
// 2)Apply filter to find people with age less than 40. And display name of all people using map 
// function. Use props.
import Pb316_c from './Pb316_c.jsx';
function Pb316_p() {
    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 45 },
        { name: "David", age: 30 }
    ];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb316</h1>
            <Pb316_c people={people} />
        </div>
    );
}
export default Pb316_p;