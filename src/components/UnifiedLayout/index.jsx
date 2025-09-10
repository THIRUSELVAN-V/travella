import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

const UnifiedLayout = ({ children }) => {
  const location = useLocation()
  const getRole = useAuthStore((state) => state.getRole)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const logout = useAuthStore((state) => state.logout)

  const userRole = getRole()
  const isAdmin = userRole === 'admin'

  // Admin navigation items
  const adminNavItems = [
    { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/trips', icon: 'flight_takeoff', label: 'Trips' },
    { path: '/admin/bookings', icon: 'book_online', label: 'Bookings' },
    { path: '/admin/travelers', icon: 'groups', label: 'Travelers' },
    { path: '/admin/reports', icon: 'assessment', label: 'Reports' },
    { path: '/admin/settings', icon: 'settings', label: 'Settings' }
  ]

  // User navigation items
  const userNavItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/destinations', icon: 'place', label: 'Destinations' },
    { path: '/planner', icon: 'event_note', label: 'Trip Planner' },
    { path: '/offers', icon: 'local_offer', label: 'Offers' },
    { path: '/booking', icon: 'book_online', label: 'My Bookings' },
    { path: '/contact', icon: 'contact_support', label: 'Contact' }
  ]

  const navItems = isAdmin ? adminNavItems : userNavItems

  const isActive = (path) => {
    if (path === '/' || path === '/admin') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Sidebar - always fixed */}
      <aside className="fixed top-0 left-0 h-screen w-64 z-40 bg-slate-900 p-4 border-r border-slate-800 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 p-2 mb-6">
          <svg className="h-8 w-8 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
          </svg>
          <h1 className="text-xl font-bold">{isAdmin ? 'Travel Admin' : 'Travella'}</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Info & Actions */}
        <div className="flex flex-col gap-4 mt-6">
          {isAdmin ? (
            <>
              <button className="flex items-center justify-center rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined mr-2">add</span>
                <span className="truncate">New Trip</span>
              </button>
              <Link
                to="/admin/help"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined">help_outline</span>
                <span className="text-sm font-medium">Help and docs</span>
              </Link>
            </>
          ) : (
            <>
              <button className="flex items-center justify-center rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined mr-2">explore</span>
                <span className="truncate">Plan Trip</span>
              </button>
              <Link
                to="/about"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined">info</span>
                <span className="text-sm font-medium">About Us</span>
              </Link>
            </>
          )}
          {/* User Profile & Logout */}
          <div className="border-t border-slate-800 pt-4">
            {isAuthenticated() ? (
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">person</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Welcome back!</p>
                  <p className="text-xs text-slate-400">{isAdmin ? 'Admin User' : 'Traveler'}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-slate-400 hover:text-white transition-colors"
                  title="Logout"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined">login</span>
                <span className="text-sm font-medium">Login</span>
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content - margin left for sidebar */}
      <div className="ml-64 min-h-screen bg-slate-950">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default UnifiedLayout
