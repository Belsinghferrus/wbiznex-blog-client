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


  addBlog: async (title, content, image) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('image', image);

      const res = await axiosInstance.post('/blog/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      set((state) => ({
        blogs: [res.data, ...state.blogs],
      }));
    } catch (err) {
      console.error('Add Blog Error:', err);
      set({ error: 'Failed to add blog' });
    }
  },


  updateBlog: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      formData.append('title', updatedData.title);
      formData.append('content', updatedData.content);

      if (updatedData.image instanceof File) {
        formData.append('image', updatedData.image); // ✅ must match backend key
      } else if (updatedData.imageUrl) {
        formData.append('imageUrl', updatedData.imageUrl); // optional fallback
      }

      const res = await axiosInstance.put(`/blog/edit/${id}`, formData); // ✅ No headers
      set((state) => ({
        blogs: state.blogs.map((b) => (b.id === id ? res.data : b)),
      }));
    }
    catch (error) {
      console.error('Update Blog Error:', error);
      throw new Error('Failed to update blog');
    } finally{
      set({ loading: false, error: null });
    }
  },


}));

export default useBlogStore;
