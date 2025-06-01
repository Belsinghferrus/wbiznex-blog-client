import React, { useEffect } from 'react'
import useBlogStore from '../store/blogStore';
import BlogCard from '../components/BlogCard.jsx';
import './css/homepage.css';

const HomePage = () => {
  const { blogs, loading, error, fetchAllBlogs } = useBlogStore();

  useEffect(() => {
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  // This is the main page of the application
  return (
    <div className='home-page'>
      <div className='home-container'>
        <h1>Latest Blogs</h1>
        {loading && <p>Loading blogs...</p>}
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
