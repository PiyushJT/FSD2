function Std(props) {   
    return (
        <table border="1" cellPadding="10" cellSpacing="0" align="center">
            <thead> 
                <tr>
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>T1 Marks</th>
                    <th>T2 Marks</th>
                </tr>   
            </thead>
            <tbody>
                {props.students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.rollNumber}</td>
                        <td>{student.t1Marks}</td>
                        <td>{student.t2Marks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Std;