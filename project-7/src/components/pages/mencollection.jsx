import { useNavigate, useParams } from "react-router-dom"

export default function MEN(){
    const navigator=useNavigate()
    const param=useParams()
    return(
        <>
        <h1>{param.id} mens collectin</h1>
        <button onClick={navigator('/')}>back</button>
        </>
    )
}