import { useNavigate } from 'react-router-dom';
import './css/bloglistTile.css'
import useBlogStore from '../store/blogStore';
const BlogListTile = ({ blog, onDelete }) => {

  const navigate = useNavigate();

  return (
    <div className="blog-tile">
      <img src={blog.image} alt="blog" />
      <div onClick={() => navigate(`/blog/${blog.id}`)} className="tile-info">
        <h4>{blog.title}</h4>
      </div>
      <div className="tile-actions">
        <button onClick={() => navigate(`/admin/edit/${blog.id}`)} title="Edit">
          ✏️ <span className="action-text">Edit</span>
        </button>
        <button onClick={() => onDelete(blog.id)} title="Delete">
          🗑️ <span className="action-text">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default BlogListTile;
