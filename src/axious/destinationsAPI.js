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
  create: async (payload) => {
    try {
      const response = await api.post('/destinations', payload)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  update: async (id, payload) => {
    try {
      const response = await api.put(`/destinations/${id}`, payload)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  remove: async (id) => {
    try {
      const response = await api.delete(`/destinations/${id}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  search: async (params) => {
    try {
      const response = await api.get('/destinations/search', { params })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
  getInRadius: async (lat, lng, distance) => {
    try {
      const response = await api.get(`/destinations/radius/${lat}/${lng}/${distance}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },
};


