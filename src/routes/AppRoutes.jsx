import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, AdminPanel, Home, Login, NotFound, Unauthorized, Sample, StyleShowcase, Destinations, Planner, Offers, Booking, Contact, DestinationDetail, Profile } from '../pages'
import ProtectedRoute from './ProtectedRoute'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login page="login" imageSubText="Travel is the only purchase that enriches you in ways beyond material wealth" />} />
      <Route path="/register" element={<Login page="register" imageSubText="Adventure awaits  register now and start your journey!" />} />
      <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPanel /></ProtectedRoute>} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/styleShowcase" element={<StyleShowcase />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:id" element={<DestinationDetail />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
