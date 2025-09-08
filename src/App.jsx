
import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './theme/theme-provider'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen '>
        <AppRoutes/>
      </div>
    </ThemeProvider>

  )
}

export default App
