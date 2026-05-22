function StudentCard(props) {
    return (
        <>   
           {props.student.map((student, index) => (
                <div key={index}>
                    <img src={student.img} alt={student.name} />
                    <h2>{student.name}</h2>
                    <p>Roll Number: {student.rollNum}</p>
                    <p>Mark: {student.mark}</p>
                </div>
            ))}
            
        </>
    );
}
export default StudentCard;