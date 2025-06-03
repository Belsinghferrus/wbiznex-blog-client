// src/pages/AddBlog.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import useBlogStore from '../store/blogStore.js';
import 'react-quill/dist/quill.snow.css';
import './css/createBlog.css';



const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const { addBlog, loading } = useBlogStore();
    const [preview, setPreview] = useState(null); // State for image preview

    const navigate = useNavigate();

    useEffect(() => {
        if (image) {
            const objectUrl = URL.createObjectURL(image);
            setPreview(objectUrl);

            // Cleanup the object URL when the component unmounts or image changes
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview(null);
        }
    }, [image]);

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
                {preview && <img src={preview} alt="Preview" className="preview-img" />}


                <ReactQuill
                    className="quill-editor"
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    placeholder="Write your blog content..."
                />


                {loading ?
                    <button type="submit" className="save-btn-disable" disabled>
                        Publishing..
                    </button> :
                    <button type="submit" className="save-btn">
                        Publish
                    </button>
                }            </form>
        </div>
    );
};

export default AddBlog;
