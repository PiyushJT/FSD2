// Create React app to pass color(red), background color(yellow), font size(25px) and font
// style(italic) as properties to component and apply css to "Lj Students" text written in p tag. use
// Props
import Out3 from './out3.jsx'
function Task3() {
    const style = {
        color: 'red',
        backgroundColor: 'yellow',
        fontSize: '25px',
        fontStyle: 'italic'
    };
    return (
        <div>
            <h1>Task 3</h1>
            <Out3 style={style} />
        </div>
    )
}
export default Task3