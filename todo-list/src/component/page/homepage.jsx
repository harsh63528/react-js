import { useRef,useState } from "react"
import Input from "./input"

export default function Homepage(){
    const[task,addTask]=useState([])
    const dataref=useRef()
    return(
        <>
        <Input ref={dataref} task={task} addTask={addTask}/>
        </>
    )
}