// Write a React code to print car’s brand name and its model name which are
// passed as props using JSON.
import Pb298 from './Pb298_c.jsx';
function PB298_p() {
  const car = {
    brand: "Toyota",
    model: "Camry"
  };
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb298</h1>
            <Pb298 brand={car.brand} model={car.model} />
        </div>
    )
}
export default PB298_p;