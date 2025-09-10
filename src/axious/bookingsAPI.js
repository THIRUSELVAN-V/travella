import { api } from './api';

export const bookingsAPI = {
  search: async (query) => {
    try {
      const response = await api.get('/bookings/search', { params: query });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  create: async (payload) => {
    try {
      const response = await api.post('/bookings', payload);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getMyBookings: async () => {
    try {
      const response = await api.get('/bookings');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/bookings/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  update: async (id, payload) => {
    try {
      const response = await api.put(`/bookings/${id}`, payload)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  remove: async (id) => {
    try {
      const response = await api.delete(`/bookings/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  cancel: async (id) => {
    try {
      const response = await api.put(`/bookings/${id}/cancel`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  review: async (id, payload) => {
    try {
      const response = await api.put(`/bookings/${id}/review`, payload)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  stats: async () => {
    try {
      const response = await api.get('/bookings/stats')
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
};


