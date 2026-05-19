// write react code to render a component with the following data a heading in italics blue color and font size 25px and ordered list of three flowers number start with capital letter A list should be in red  color .

function comp2() {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "25px" }}>Flowers</h1>
      <ol style={{ color: "red" }} type="A">
        <li>Amaryllis</li>
        <li>Anemone</li>
        <li>Asphodel</li>
      </ol>
    </>
  );
}
export default comp2;