// Create React app to pass student name, roll number, t1 marks and t2 marks  of 2 students to 
// component and read the information and display in table format. Use Props.
function PB303(props) {
    return (
        <div>
            <table border="1" align="center">
                
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>T1 Marks</th>
                        <th>T2 Marks</th>
                    </tr>
                
                
                    {props.students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.roll}</td>
                            <td>{student.t1}</td>
                            <td>{student.t2}</td>
                        </tr>
                    ))}
                
            </table>
        </div>
    )
}
export default PB303;