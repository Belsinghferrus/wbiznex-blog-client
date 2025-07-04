import { useEffect } from 'react';
import useBlogStore from '../store/blogStore';
import BlogListTile from '../components/BlogListTile';
import AdminSidebar from '../components/AdminSidebar';
import './css/adminDashboard.css'
import { Link, useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const { blogs, fetchAllBlogs, deleteBlog } = useBlogStore();

  const Navigate = useNavigate();
  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  return (
    <div className="admin-layout">
      <main className="dashboard-main">
      <div className="admin-notice">
          <p>You are logged in as <strong>Admin</strong>.</p>
          <Link to="/" className="admin-dashboard-button">
            Go to Homepage
          </Link>
        </div>
        <div className="dashboard-header">
          <h2>All Blogs</h2>
          <button className="add-blog-button" onClick={() => Navigate('/admin/create')}>
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
