import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBlogStore from '../store/blogStore';
import './css/blogdetails.css';

const Blog = () => {
  const { id } = useParams();
  const { selectedBlog, fetchBlogById } = useBlogStore();

  useEffect(() => {
    fetchBlogById(id);
  }, [id, fetchBlogById]);

  if (!selectedBlog) return <p className="loading">Loading...</p>;

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{selectedBlog.title}</h1>
      <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-detail-image" />
      <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
      <p className='home-button-redirect'>--back to home</p>
    </div>
  );
};

export default Blog;
