import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ Route, Routes} from 'react-router-dom'
import Navbar from './component/page/navbar'
import Homepage from './component/page/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<h1>About Page</h1>}/>
    <Route path='*' element={<h1>404 Not Found</h1>}/>
   </Routes>
   </>
  )
}

export default App
