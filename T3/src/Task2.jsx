// Create React app to pass student name, roll number, t1 marks and t2 marks of 2 students to
// component and read the information and display in table format. Use Props.
import Std from './std.jsx'
function Task2() {
    const students = [
        { name: "John Doe", rollNumber: "12345", t1Marks: 85, t2Marks: 90 },
        { name: "Jane Smith", rollNumber: "67890", t1Marks: 92, t2Marks: 88 }
    ];
    return (
        <div>
            <h1>Student Information</h1>
            <Std students={students} />
        </div>
    )
}
export default Task2