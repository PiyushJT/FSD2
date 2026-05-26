// Write react js script to perform the task as below using function component:
// •	Create array of objects which have id, name & city of person.
// •	Display id & name of persons having city name “Ahmedabad” . Use props.
// No need to write App.js file.
import Pb320_c from './Pb320_c.jsx';
function Pb320_p() {
    const people = [
        { id: 1, name: "Person 1", city: "Ahmedabad" },
        { id: 2, name: "Person 2", city: "Mumbai" },
        { id: 3, name: "Person 3", city: "Ahmedabad" },
        { id: 4, name: "Person 4", city: "Delhi" },
        { id: 5, name: "Person 5", city: "Ahmedabad" },
        { id: 6, name: "Person 6", city: "Bangalore" }
    ];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb320</h1>
            <Pb320_c people={people} />
        </div>
    );
}
export default Pb320_p;