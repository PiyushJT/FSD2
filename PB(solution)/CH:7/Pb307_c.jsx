// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people. 
// Apply filter to find people with age less than 40. And display name of all people using map 
// function.  Use props.
function PB307(props) {
   const people= props.people
   return (
    <div>
        <h2>People with age less than 40:</h2>
        {people.filter(person => person.age < 40)
        .map((person, index) => (
            <p key={index}>{person.name}</p>
        ))}
    </div>
   )
}
export default PB307;