
import { useState } from 'react'
import './App.css'

function App() {
  const[num,setNum]=useState(0)

  function increase(){
    setNum(num+1)
  }

  function decrease(){
    setNum(num-1)
  }

  function jump5(){
    setNum(num+5)
  }

  function reset(){
    setNum(0)
  }

  return (
    <>
     <h1>the set number is{num}</h1>
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button>
     <button onClick={jump5}>jump by 5</button>
     <button onClick={reset}>reset</button>
    </>
  )
}

export default App
