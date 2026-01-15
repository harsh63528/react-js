import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function CONTACT(){
    const[data,setData]=useState('')
const dataref=useRef()
    const focus=()=>{
        dataref.current.focus()
    }
    const store=()=>{
        setData(dataref.current.value)
        dataref.current.value="";
    }

    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-amber-900">
        <Link to='men' className="bg-amber-500">man</Link>
                <h1>contact</h1>
                <input type="text" name="name" id="name" className="border-2 border-gray-700" ref={dataref} onClick={focus}/>
                <button type="submit" className="border-2 border-black bg-red-950" onClick={store}>enter</button>
                <h1>{data}</h1>

                <Outlet/>
        </div>
    )
}