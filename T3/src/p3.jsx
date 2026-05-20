// create react app using props to display student detail 1. create a parent component  p3.jsx 2. pass the following data to child component p4.jsx  using props your name , roll num , mark  3.in child component display your detail and increase mark by 1 and display updated mark
import P4 from './p4.jsx'
function P3() {
   
    return (
        <>
            <h1>Student Details</h1>
            <P4 name="John Doe" rollNum={123} mark={85} />
        </>
    );
}
export default P3;