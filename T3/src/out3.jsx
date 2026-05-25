// Create React app to pass color(red), background color(yellow), font size(25px) and font
// style(italic) as properties to component and apply css to "Lj Students" text written in p tag. use
// Props
function Out3(props) {
    return (
        <div>
            <p style={props.style}>Lj Students</p>
        </div>
    )
}
export default Out3