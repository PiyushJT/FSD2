// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and branch(CSE,IT,CE) of students. 
// Apply filter to find students who are from CSE branch. And display name of all studens of CSE 
// branch using map function
function PB308() {
    const students = [
        { name: "Alice", branch: "CSE" },
        { name: "Bob", branch: "IT" },
        { name: "Charlie", branch: "CE" },
        { name: "David", branch: "CSE" },
        { name: "Eve", branch: "IT" }
    ];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>PB308</h1>
            <h1 style={{ color: 'blue' }}>Students from CSE Branch:</h1>
            {students.filter(student => student.branch === "CSE")
            .map((student, index) => (
                <p key={index}>{student.name}</p>
            ))}
        </div>
    )
}
export default PB308;