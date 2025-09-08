import { api } from './api';

export const destinationsAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/destinations');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getById: async (id) => {
    try {
      const response = await api.get(`/destinations/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};


