import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, AdminPanel, Dashboard, Home, AuthLayout, NotFound, Unauthorized } from '../pages'
import ProtectedRoute from './ProtectedRoute'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<AuthLayout page="login" imageSubText="Travel is the only purchase that enriches you in ways beyond material wealth" />} />
      <Route path="/register" element={<AuthLayout page="register" imageSubText="Adventure awaits – register now and start your journey!" />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPanel /></ProtectedRoute>} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
