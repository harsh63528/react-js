import { createContext, useState } from "react";

export const value=createContext()

export default function CONTEXTAPI({children}){
    const [bgtheme,setTheme]=useState('black')
    return(
        <>
        <value.Provider value={[bgtheme,setTheme]}>
            {children}
        </value.Provider>
        </>
    )
}