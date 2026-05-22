// create a react app that display a list of student using props create a student card to show detail like name , roll no , mark and icard image use student list componemt to store student data and a filter 25 mark student in student card component using map method
import StudentCard from './StudentCard.jsx'
function StudentList() {
    const students = [
        { "name": "John Doe", "rollNum": 123, "mark": 85, "img": "https://images.wondershare.com/ailab/image2023/products/upscaler-banner.png" },
        { "name": "Jane Smith", "rollNum": 456, "mark": 25, "img": "https://images.wondershare.com/ailab/image2023/products/upscaler-banner.png" },
        { "name": "Bob Johnson", "rollNum": 789, "mark": 80, "img": "https://images.wondershare.com/ailab/image2023/products/upscaler-banner.png" }
    ];
    
    return (
        <>
            <h1>Student Details</h1>
            {/* <StudentCard student1={students} /> */}
            <StudentCard student={students.filter(student => student.mark == 25)} />
        </>
    );
}
export default StudentList;