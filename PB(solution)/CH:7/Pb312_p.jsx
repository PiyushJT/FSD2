// Create react app  using function component to pass  background color(green), font size(50px) 
// font style(italic),text transform(uppercase) as properties to Example .js component and apply 
// css to “This is an React Application” text written in h1 tag in Example2.js component. Use 
// props.
import PB312 from './Pb312_c.jsx';
function PB312_p() {
    const styles = {
        backgroundColor: 'green',   
        fontSize: '50px',
        fontStyle: 'italic',
        textTransform: 'uppercase'
    };
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb312</h1>
            <PB312 styles={styles} />
        </div>
    )
}   
export default PB312_p;