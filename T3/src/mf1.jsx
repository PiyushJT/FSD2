// create a react component that contains and array of student object with id , name  and std perform the following task using map  and filter method 1. display only those student whos std is 5 2) increase that std by 1 3) display student name and updated std 
function Mf1() {
    const students = [
        {id:1, name:"John", std:5},
        {id:2, name:"Jane", std:6},
        {id:3, name:"Doe", std:5},
        {id:4, name:"Smith", std:7}
    ];
  
    return (    
        <>
            <h1>Students in std 5</h1>
            {students
            .filter((student) => student.std === 5)
            .map((student) => (
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Std: {student.std+1}</p>
                </div>
            ))}
        </>
    );
}
export default Mf1;