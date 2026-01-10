import { useParams } from "react-router-dom"

export default function MEN(){
    const param=useParams()
    return(
        <h1>{param.id}mens collectin</h1>
    )
}