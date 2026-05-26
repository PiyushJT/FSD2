// Write react js script to perform the tasks as asked below using functional component:
// 1)Add an array of objects which contains name and age of people. 
// 2)Apply filter to find people with age less than 40. And display name of all people using map 
// function. Use props.
function Pb316_c(props) {
    const people=props.people
    return (
        <div>
            <h1>People with age less than 40:</h1>
            <div>
                {people.filter(person => person.age < 40).map((person, index) => (
                    <p key={index}>{person.name}</p>
                ))}
            </div>
        </div>
    );
}
export default Pb316_c;