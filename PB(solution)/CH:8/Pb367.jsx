// Write a reactJS program to perform the tasks as asked below.
// 1) Create one main file (parent file)Main.js and other 2 component files
// Comp1.js, Comp2.js. Pass username from Main.js file to Comp2.js file.
// Display this user name in browser in Blue color. (useContext)
import Cmp2 from "./Cmp2.jsx";
import {createContext} from 'react'
const username = createContext()
function Pb367() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb367</h1>
            <username.Provider value={"John Doe"}>
                <Cmp2 />
            </username.Provider>
        </div>
    )
}
export default Pb367;
export {username}