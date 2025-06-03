import { create } from 'zustand';
import axiosInstance from '../utils/axiosInstance';

const useAuthStore = create((set) => ({

  isAuthenticated: false,
  isLoading: true, // NEW

  login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/user/login', { email, password }, { withCredentials: true });
      set({ isAuthenticated: true });
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.error || 'Login failed' };
    }
  },

  checkAuth: async () => {
      try {
        const result = await axiosInstance.get('/user/verify', { withCredentials: true });
        set({ isAuthenticated: true, isLoading: false });
      } catch {
        set({ isAuthenticated: false, isLoading: false });
      } 
  },


  logout: async () => {
    try {
      await axiosInstance.post('/user/logout', {}, { withCredentials: true });
      set({ isAuthenticated: false });
      window.location.href = '/'; // Redirect to home

    } catch (error) {
      console.error('Logout Error:', error);
      set({ isAuthenticated: false });
      window.location.href = '/'; // Ensure redirect even on error
    }
  }
}));

export default useAuthStore;
