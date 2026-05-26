// Create React app to pass color(red), background color(yellow), font size(25px) and font 
// style(italic) as properties to component and apply css to "Lj Students" text written in p tag. use 
// Props
function PB306(props) {
    const style = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        fontSize: props.fontSize,
        fontStyle: props.fontStyle
    };
    return (
        <div>
            <p style={style}>Lj Students</p>
        </div>
    )
}
export default PB306;