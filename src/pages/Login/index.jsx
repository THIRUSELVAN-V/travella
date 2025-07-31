import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

// Simulated backend response
const mockLoginAPI = ({ username, password }) => {
  if (username === 'admin' && password === 'admin123') {
    return { token: 'admin-jwt-token', role: 'admin' }
  } else if (username === 'user' && password === 'user123') {
    return { token: 'user-jwt-token', role: 'user' }
  } else {
    return null
  }
}

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = mockLoginAPI({ username, password })
    if (result) {
      login(result)
      navigate('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h2 className="text-2xl font-bold text-primary mb-4">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[20rem] bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:brightness-110 transition duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
