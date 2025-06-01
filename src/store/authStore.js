import { create } from 'zustand';
import axiosInstance from '../utils/axiosInstance';

const useAuthStore = create((set) => ({
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/user/login', { email, password }, { withCredentials: true });
      set({ isAuthenticated: true });
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.error || 'Login failed' };
    }
  },

  logout: () => {
    set({ isAuthenticated: false });
    // Optional: hit /logout route to clear cookie server-side
  }
}));

export default useAuthStore;
