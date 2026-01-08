
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // setting default value
 const[A,setA]=useState(0)
 const[B,setB]=useState(0)
 const[message,setMessage]=useState('')
 const[Value,setData]=useState(0)


const incA=()=>{
  setData(A)
  setA(A+1)
}

const incB=()=>{
  setData(B)
 setB(B+1)
}

const decA=()=>{
  setData(A)
  A>1?setA(A-1):setA(1);
}

const decB=()=>{
  setData(B)
  B>1?setB(B-1):setB(1);
}

useEffect(()=>{
  if(Value<=A){
    setMessage(`value of A is increase to ${A}`)}
    else{
      setMessage(`value of A is decrese to ${A}`)}
  setTimeout(()=>{
      setMessage('there is no reminder')
  },2000)

},[A]);

useEffect(()=>{
  if(Value<=B){
    setMessage(`value of B is increase to ${B}`)}
    else{
      setMessage(`value of B is decrese to ${B}`)}

  setTimeout(()=>{
      setMessage('there is no reminder')
  },2000)
},[B])

return(
  <>

  <div className='flex justify-around border-2 rounded-2xl p-3'>
  <h1 className='border-2 rounded-2xl p-3'>A:{A}</h1>
  <h1  className='border-2 rounded-2xl p-3'>B:{B}</h1>
  </div>

  <div >
<h3 className='border-1 rounded-2xl font-bold p-5 ' >{message}</h3>
  </div>

  <div>

 <button className='bg-amber-500 border-2 active:bg-amber-950 m-2' onClick={incA}>increment A</button>
   <button className='bg-amber-500 border-2 active:bg-amber-950 m-2' onClick={incB}>increment B</button>
   <button className='bg-amber-500 border-2 active:bg-amber-950 m-2' onClick={decA}> decrement A</button>
   <button className='bg-amber-500 border-2 active:bg-amber-950 m-2' onClick={decB}>decrement B</button>

  </div>
  
  </>
)


}

export default App
