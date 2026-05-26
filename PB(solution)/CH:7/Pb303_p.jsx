// Create React app to pass student name, roll number, t1 marks and t2 marks  of 2 students to 
// component and read the information and display in table format. Use Props.
import Pb303 from './Pb303_c.jsx';
function PB303_p() {
  const students = [
    { name: "Alice", roll: 1, t1: 85, t2: 90 },
    { name: "Bob", roll: 2, t1: 78, t2: 82 }
  ];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb303</h1>
            <Pb303 students={students} />
        </div>
    )
}
export default PB303_p;