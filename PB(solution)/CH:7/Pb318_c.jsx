// Write a program to create function based ReactJS app having an array of 6 people having 
// mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60 
// using filter method. Also display total count of people whose age is greater than 60 on the same 
// page. Use props.
function Pb318_c(props) {
    const people = props.people;
    return (
        <div>
            <h1>People with age greater than 60:</h1>
            <div>
                {people.filter(person => person.age > 60).map((person, index) => (
                    <p key={index}>{person.name}</p>
                ))}
            </div>
            <h2>Total count: {people.filter(person => person.age > 60).length}</h2>
        </div>
    );
}   
export default Pb318_c;