import { useContext } from "react"
import { fname,lname } from "./PC1"
function C2(){
    const fn = useContext(fname)
    const ln = useContext(lname)
    return (
        
    <h1>Welcome {fn} {ln}</h1>
    )
}
export default C2
 