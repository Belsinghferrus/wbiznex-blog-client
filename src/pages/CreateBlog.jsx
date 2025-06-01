// src/pages/AddBlog.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import useBlogStore from '../store/blogStore.js';
import 'react-quill/dist/quill.snow.css';
import './css/createBlog.css';



const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const { addBlog } = useBlogStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return alert('Please select an image');
        try {
            await addBlog(title, content, image);
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('Failed to add blog. Please try again.');
        }

    };

    return (
        <div className="add-blog-container">
            <h2>Create New Blog</h2>
            <form className="add-blog-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />

                <ReactQuill
                    className="quill-editor"
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    placeholder="Write your blog content..."
                />


                <button type="submit" className="submit-btn">Publish</button>
            </form>
        </div>
    );
};

export default AddBlog;
