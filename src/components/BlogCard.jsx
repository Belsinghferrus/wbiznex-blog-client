import { Link } from 'react-router-dom';
import './css/blogcard.css'
export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0, 100)}...</p>
        <Link to={`/blog/${blog.id}`} className="read-more">Read more</Link>
      </div>
    </div>
  );
}
