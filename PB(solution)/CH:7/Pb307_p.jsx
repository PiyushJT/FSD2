// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people. 
// Apply filter to find people with age less than 40. And display name of all people using map 
// function.  Use props.
import Pb307 from './Pb307_c.jsx';
function PB307_p() {
  const people = [  
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 45 },
    { name: "David", age: 30 },
    { name: "Eve", age: 50 }
  ];    
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb307</h1>
            <Pb307 people={people} />
        </div>
    )
}   
export default PB307_p;