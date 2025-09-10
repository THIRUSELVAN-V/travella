import { create } from 'zustand'
import { authAPI } from '../axious/authAPI'
import { destinationsAPI } from '../axious/destinationsAPI'
import { bookingsAPI } from '../axious/bookingsAPI'

export const useStore = create((set, get) => ({
  // auth
  currentUser: null,
  users: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  fetchCurrentUser: async () => {
    const data = await authAPI.getCurrentUser()
    set({ currentUser: data?.data || data })
    return data
  },
  login: async (credentials) => {
    const data = await authAPI.login(credentials)
    set({ currentUser: data.user })
    return data
  },
  register: async (payload) => authAPI.register(payload),
  logout: async () => {
    try { await authAPI.logout() } finally { set({ currentUser: null }) }
  },

  // destinations
  destinations: [],
  destination: null,
  loadDestinations: async (params) => {
    const data = params ? await destinationsAPI.search(params) : await destinationsAPI.getAll()
    const list = Array.isArray(data) ? data : data?.data || []
    set({ destinations: list })
    return list
  },
  loadDestinationById: async (id) => {
    const data = await destinationsAPI.getById(id)
    const dest = data?.data || data
    set({ destination: dest })
    return dest
  },

  // bookings
  myBookings: [],
  loadMyBookings: async () => {
    const data = await bookingsAPI.getMyBookings()
    const list = Array.isArray(data) ? data : data?.data || []
    set({ myBookings: list })
    return list
  },
  createBooking: async (payload) => bookingsAPI.create(payload),
  cancelBooking: async (id) => bookingsAPI.cancel(id),
  reviewBooking: async (id, payload) => bookingsAPI.review(id, payload),
}))