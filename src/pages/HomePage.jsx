import React, { useEffect } from 'react'
import useBlogStore from '../store/blogStore';
import BlogCard from '../components/BlogCard.jsx';
import './css/homepage.css';
import Spinner from '../utils/Spinner.jsx';
import useAuthStore from '../store/authStore.js';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { blogs, loading, error, fetchAllBlogs } = useBlogStore();
  const { isAuthenticated} = useAuthStore();

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  return (
    <div className='home-page'>
      <div className='home-container'>
      {isAuthenticated && (
        <div className="admin-notice">
          <p>You are logged in as <strong>Admin</strong>.</p>
          <Link to="/admin/dashboard" className="admin-dashboard-button">
            Go to Admin Dashboard
          </Link>
        </div>
      )}
        <h1>Latest Blogs</h1>
        {loading && <Spinner />}
        {error && <p>{error}</p>}
        <div className='blog-card-grid'>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
