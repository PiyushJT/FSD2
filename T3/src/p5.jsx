// create a react app using props to pass as object from one component to onther componete create a  parent component p5.jsx creat an object named detail containing student name and university name , pass the detail object to child compoent p6.jsx using props  and in child component display the student name and university name
import P6 from './p6.jsx'
function P5() {
    const detail = {
        name: "John Doe",
        university: "XYZ University"
    };
    return (
        <>
            <h1>Student Details</h1>
            <P6 detail={detail} />
        </>
    );
}
export default P5;