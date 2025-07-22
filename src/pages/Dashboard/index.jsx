import React from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome {user?.name}</h1>
      <button
        onClick={() => {
          logout()
          navigate('/login')
        }}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}