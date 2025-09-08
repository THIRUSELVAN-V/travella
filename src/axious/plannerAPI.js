import { api } from './api';

export const plannerAPI = {
  planTrip: async (payload) => {
    try {
      const response = await api.post('/planner/plan', payload);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};


