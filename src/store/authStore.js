import { create } from 'zustand';
import axiosInstance from '../utils/axiosInstance';

const useAuthStore = create((set) => ({
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/user/login', { email, password }, { withCredentials: true });
      set({ isAuthenticated: true });
      // Optionally store user data in local storage or state
      localStorage.setItem('token', JSON.stringify(res.data.token));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.error || 'Login failed' };
    }
  },

  checkAuth: async () => {
    try{
      const getToken = localStorage.getItem("token");
      if(!getToken){
        set({isAuthenticated: false})
      } 
    } catch (err) {
      console.error('Error checking authentication:', err);
      set({ isAuthenticated: false });
    }
  },

  
  logout: () => {
    set({ isAuthenticated: false });
    // Optional: hit /logout route to clear cookie server-side
  }
}));

export default useAuthStore;
