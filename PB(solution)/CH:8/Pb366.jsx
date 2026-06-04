// write a react js file create one main file comp.jsx and other three component file comp1.jsx,comp2.jsx and comp3.jsx  pass num1 and num2 from comp2.jsx to comp3.jsx file calculate multiplication of num1 and num2 using useContext and display result in comp3.jsx file
import Cmp1 from "./Comp1";
import { createContext } from 'react'
const num1 = createContext()
const num2 = createContext()
function Pb366() {
    return (
        <div>
            <num1.Provider value={5}>
                <num2.Provider value={10}>
                    <Cmp1 />
                </num2.Provider>
            </num1.Provider>
        </div>
    )
}
export default Pb366;
export { num1, num2 }