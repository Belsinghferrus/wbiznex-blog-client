import { create } from 'zustand';
import axiosInstance from '../utils/axiosInstance';

const useBlogStore = create((set) => ({
  blogs: [],
  loading: false,
  error: null,

  fetchAllBlogs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get('/blog'); // Uses instance now
      set({ blogs: res.data, loading: false });
    } catch (err) {
      set({ error: 'Failed to load blogs', loading: false });
    }
  },


  fetchBlogById: async (id) => {
    try {
      const res = await axiosInstance.get(`/blog/${id}`);
      set({ selectedBlog: res.data });
    } catch (err) {
      console.error('Failed to fetch blog:', err);
      set({ selectedBlog: null });
    }
  },

  deleteBlog: async (id) => {
    try {
      await axiosInstance.delete(`/blog/delete/${id}`, { withCredentials: true });
      set((state) => ({
        blogs: state.blogs.filter((blog) => blog.id !== id),
      }));
    } catch (err) {
      console.error('Delete Blog Error:', err);
    }
  },
}));

export default useBlogStore;
