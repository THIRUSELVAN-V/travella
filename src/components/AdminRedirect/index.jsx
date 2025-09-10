import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

const AdminRedirect = ({ children }) => {
  const navigate = useNavigate()
  const getRole = useAuthStore((state) => state.getRole)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated()) {
      const userRole = getRole()
      if (userRole === 'admin') {
        navigate('/admin')
      }
    }
  }, [navigate, getRole, isAuthenticated])

  return children
}

export default AdminRedirect
