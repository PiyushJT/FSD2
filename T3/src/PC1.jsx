// write a react js program to perfrom following task create 1 main file PC1.jsx and other two comonent file C1.jsx and C2.jsx pass first name and last name from PC1.jsx to C2.jsx file and display welcome your first name and last name in browser 
import C1 from './C1.jsx'
import { createContext } from 'react'
const fname = createContext()
const lname = createContext()
function PC1() {

    return (
        <div>
            <fname.Provider value="John">
                <lname.Provider value="Doe">
                    <C1 />
                </lname.Provider>
            </fname.Provider>
        </div>
    )
}
export default PC1
export { fname, lname }