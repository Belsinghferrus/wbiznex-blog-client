import React from 'react'
import logo from '../assets/wbiznex-invert-logo.png'
import './css/Header.css'
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Header = () => {

  const { isAuthenticated } = useAuthStore();


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="brand-name">WBIZNEX BLOG</span>
        </div>
        {
          isAuthenticated ?
            <Link to="/logout" className="login-button">Logout</Link>
            :
            <Link to="/login" className="login-button">Login</Link>
        }
      </div>
    </header>
  )
}

export default Header
