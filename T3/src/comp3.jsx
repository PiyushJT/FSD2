// write a react code to render a component with following data rander an image hero.png wich is available in accets folder a paragraph in green color and font size 20px use external css for paragraph and display cuurunt time and current date in purple color and it should be center aaligned.
import './comp3.css';
import img1 from './assets/hero.png';
function Comp3() {
  return (
    <>
        <img src={img1} alt="Hero" />
        <p className="green-paragraph">This is a paragraph.</p>
        <p className="purple-datetime">
          {new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}
        </p>
    </>
  );
}   
export default Comp3;