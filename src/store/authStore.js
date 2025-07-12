import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,

  login: ({ token, role }) => {
    const user = { token, role }
    localStorage.setItem('user', JSON.stringify(user))
    set({ user })
  },

  logout: () => {
    localStorage.removeItem('user')
    set({ user: null })
  },

  isAuthenticated: () => !!JSON.parse(localStorage.getItem('user')),
  getRole: () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.role || null
  },
}))
