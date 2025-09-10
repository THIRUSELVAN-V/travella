
import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './theme/theme-provider'
import { Navbar } from './components'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
  const hideNavbarRoutes = ['/login', '/register']
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen bg-background text-foreground'>
        <div className='w-full h-[72px] '>
        {!shouldHideNavbar && <Navbar/>}
        </div>
        <div>
        <AppRoutes/>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
