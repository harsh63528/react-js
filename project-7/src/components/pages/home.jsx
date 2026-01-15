import { useContext } from "react";
import { value } from "../../context/contexapi";

export default function HOME() {
  const [bgtheme,setTheme]=useContext(value)

  const change=()=>{
    if(bgtheme==='white'){
    setTheme('black')}
    else{
      setTheme('white')
    }
  }
  return (
    <div className="home-container flex flex-col h-screen w-screen bg-amber-700 justify-center items-center">
      <div className="border-2 flex flex-col justify-center items-center w-fit">
          <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-description">
        <h1>{bgtheme}</h1>
      </p>
      <button onClick={change} className="border-2 border-amber-950 bg-gray-800 active:bg-gray-700">change theme</button>
    </div>
      </div>
  )
}