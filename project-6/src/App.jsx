
import './App.css'
import{Routes,Route} from 'react-router-dom'
import HOME from './components/home'
import ABOUTUS from './components/aboutus'

export default function App() {
  <Routes>
    <Route path='/home'  element={<HOME/>}/>
    <Route path='/aboutus' element={<ABOUTUS/>} />
  </Routes>

  return(
    <h1>hi</h1>
  )
}


