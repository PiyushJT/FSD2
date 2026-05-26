// Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from 
// the array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. Pass values 
// as props.
import Pb305 from './Pb305_c.jsx';
function PB305_p() {
  const numbers = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 8];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb305</h1>
            <Pb305 numbers={numbers} />
        </div>
    )
}
export default PB305_p;