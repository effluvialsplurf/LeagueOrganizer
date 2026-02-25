import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-screen h-screen bg-purple-400'>
      <App />
    </div>
  </StrictMode>,
)
