// Create react app using function component to pass background color(green), font size(50px)
// font style(italic),text transform(uppercase) as properties to Example .js component and apply
// css to “This is an React Application” text written in h1 tag in Example2.js component. Use
// props.
import Out4 from './Out4.jsx'
function Task4() {
    const style = {
        backgroundColor: 'green',
        fontSize: '50px',
        fontStyle: 'italic',
        textTransform: 'uppercase'
    };
    return (
        <div>
            <h1>Task 4</h1>
            <Out4 style={style} />
        </div>
    )
}
export default Task4