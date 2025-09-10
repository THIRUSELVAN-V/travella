import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,

  login: (userData) => {
    const user = userData
    localStorage.setItem('user', JSON.stringify(user))
    set({ user })
  },
  setToken: (token) => {
    set({ token })
  },

  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    set({ user: null })
  },

  isAuthenticated: () => !!JSON.parse(localStorage.getItem('user'|| 'admin')),
  getRole: () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role || JSON.parse(localStorage.getItem('admin'))?.role || null
  },
}))
