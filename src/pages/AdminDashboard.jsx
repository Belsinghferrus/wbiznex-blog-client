import { useEffect } from 'react';
import useBlogStore from '../store/blogStore';
import BlogListTile from '../components/BlogListTile';
import AdminSidebar from '../components/AdminSidebar';
import './css/adminDashboard.css'
const AdminDashboard = () => {
  const { blogs, fetchAllBlogs, deleteBlog } = useBlogStore();

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  return (
    <div className="admin-layout">
      {/* <AdminSidebar /> */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h2>All Blogs</h2>
          <button className="add-blog-button" onClick={() => window.location.href = '/admin/create'}>
            <span className="fa-add" ></span> <span>New Blog</span>
          </button>
        </div>

        <div className="blog-list">
          {blogs.map((blog) => (
            <BlogListTile key={blog.id} blog={blog} onDelete={deleteBlog} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
