import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import './css/adminLogin.css'
import logo from '../assets/wbiznex_logo.png'; // Adjust the path as necessary


const AdminLogin = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(formData.email, formData.password);
    if (res.success) {
      navigate('/admin/dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-header">
        <img src={logo} alt="logo" className="logo-img" />
        <h1>WBIZNEX BLOG</h1>
      </div>
        <h2>Admin Login</h2>
        
        {error && <p className="error-msg">{error}</p>}
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required  
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
