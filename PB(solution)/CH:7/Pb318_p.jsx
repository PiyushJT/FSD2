// Write a program to create function based ReactJS app having an array of 6 people having 
// mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60 
// using filter method. Also display total count of people whose age is greater than 60 on the same 
// page. Use props.
import Pb318_c from './Pb318_c.jsx';
function Pb318_p() {
    const people = [
        { name: "Person 1", age: 70 },
        { name: "Person 2", age: 83 },
        { name: "Person 3", age: 38 },
        { name: "Person 4", age: 65 },
        { name: "Person 5", age: 49 },  
        { name: "Person 6", age: 94 }

    ];  
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb318</h1>
            <Pb318_c people={people} />
        </div>
    );
}   
export default Pb318_p;