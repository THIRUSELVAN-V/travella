
import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './theme/theme-provider'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className='min-h-screen '>
        <div>
        <AppRoutes/>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
