import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './app/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppRouter />
    </StrictMode>,
  </BrowserRouter>
)
