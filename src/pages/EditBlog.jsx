// pages/EditBlog.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './css/editBlog.css';
import useBlogStore from '../store/blogStore';


const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, updateBlog, fetchAllBlogs, loading } = useBlogStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (blogs.length === 0) fetchAllBlogs();
  }, []);

  useEffect(() => {
    const blog = blogs.find((b) => b.id == id);
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setPreview(blog.image);
    }
  }, [blogs, id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file); // ✅ File object
    setPreview(URL.createObjectURL(file));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBlog(id, { title, content, image: imageFile });
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog. Please try again.');
      return;
    }
  };


  return (
    <div className="add-blog-container">
      <h2>Edit Blog</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="preview-img" />}
        <ReactQuill value={content} onChange={setContent} />
<br />
      {loading ? 
      <button type="submit" className="save-btn-disable" disabled>
          Saving...
        </button> : 
        <button type="submit" className="save-btn">
          Save Changes
        </button>
    }
      </form>
    </div>
  );
};

export default EditBlog;
