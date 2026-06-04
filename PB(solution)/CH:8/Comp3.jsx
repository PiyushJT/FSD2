import {useContext} from "react"
import {num1,num2} from "./Pb366.jsx"
function Cmp3(){
    const n1 = useContext(num1)
    const n2 = useContext(num2)
    const result = n1 * n2
    return (
        <h1>Multiplication of {n1} and {n2} is: {result}</h1>
    )
}
export default Cmp3