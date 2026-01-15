import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import HOME from './components/pages/home.jsx'
import ABOUTUS from './components/pages/aboutus.jsx'
import NAVBAR from './components/pages/navbar.jsx'
import CONTACT from './components/pages/contact.jsx'
import MEN from './components/pages/mencollection.jsx'
import NOTFOUND from './components/pages/notfound.jsx'

function App() {
return(
  <>
  <NAVBAR/>
  <Routes>
  <Route path="/" element={<HOME />} />
  <Route path="/aboutus" element={<ABOUTUS />} />
  <Route path="/contact" element={<CONTACT/>}>
  <Route path='/contact/:id' element={<MEN/>}/>
   <Route path='men'  element={<MEN/>}/>
   </Route>
  <Route path='*' element={<NOTFOUND/>}/>
</Routes>
</>
)
}

export default App
