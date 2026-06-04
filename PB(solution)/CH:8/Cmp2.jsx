import {useContext} from "react"
import {username} from "./Pb367.jsx"
function Cmp2(){
    const name = useContext(username)
    return (
        <h1 style={{color:"blue"}}>Username is: {name}</h1>
    )
}
export default Cmp2