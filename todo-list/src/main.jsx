import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CONTEXTAPI from './component/context/contextapi.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CONTEXTAPI>
    <BrowserRouter>
          <App/>
    </BrowserRouter>
  </CONTEXTAPI>
  </StrictMode>,
)
