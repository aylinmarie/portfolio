import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

if (import.meta.env.DEV) {
  const axe = await import('@axe-core/react')
  axe.default(React, { ReactDOM: (await import('react-dom')) }, 1000)
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
