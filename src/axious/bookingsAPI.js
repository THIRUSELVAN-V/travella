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
      const response = await api.get('/bookings/me');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};


