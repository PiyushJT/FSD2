// Write react js script to perform the task as below using function component:
// •	Create array of objects which have id, name & city of person.
// •	Display id & name of persons having city name “Ahmedabad” . Use props.
// No need to write App.js file.
function Pb320_c(props) {
    const people = props.people;
    return (
        <div>
            <h2>People from Ahmedabad:</h2>
            <div>
                {people.filter(person => person.city === "Ahmedabad").map((filteredPerson, index) => (
                    <div key={filteredPerson.id}>
                        <p>ID: {filteredPerson.id}</p>
                        <p>Name: {filteredPerson.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Pb320_c;