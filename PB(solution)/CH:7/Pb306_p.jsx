// Create React app to pass color(red), background color(yellow), font size(25px) and font 
// style(italic) as properties to component and apply css to "Lj Students" text written in p tag. use 
// Props
import Pb306 from './Pb306_c.jsx';
function PB306_p() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb306</h1>
            <Pb306 color="red" backgroundColor="yellow" fontSize="25px" fontStyle="italic" />
        </div>
    )
}
export default PB306_p;