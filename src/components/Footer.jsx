import React from 'react'
import './css/footer.css'
import logo from '../assets/wbiznex-invert-logo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <div className='logo-section'>
            <a href="https://wbiznex.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="WBIZNEX Logo" className="footer-logo" />
            </a>
            <h3>WBIZNEX</h3>
          </div>
          <p className="footer-description">
            World Business Nexus is a global business networking platform connecting entrepreneurs and businesses worldwide.
          </p>
          <div className="social-icons" >
            <a href="https://www.facebook.com/people/Wbiznex-World-Business-Nexus/61576212310623/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://x.com/wbiznex" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.youtube.com/@wbiznex" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.linkedin.com/in/wbiznex-world-business-nexus-841785366/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.instagram.com/Wbiznex/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        <div className="footer-section reach">
          <h3>Reach Us</h3>
          <p><strong>World Trade Parliament LLC</strong><br />
            No. 8, The Green, Suite B<br />
            Dover, Zip Code-19901, Delaware, USA.</p>
          <p><strong>Phone</strong><br /> +1 (302) 208-2324</p>
          <p><strong>Email</strong><br /> hello@wbiznex.com</p>
          <p><strong>Office Hours</strong><br /> Monday - Friday: 9:00 AM - 5:00 PM<br /> Saturday - Sunday: Closed</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and insights.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email address" />
            <button><i className="fas fa-paper-plane" /></button>
          </div>
          <small>By subscribing, you agree to our Privacy Policy.</small>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} World Business Nexus. All rights reserved.</p>
        <div>
          <a href="https://wbiznex.com/privacy.html">privacy policy</a>
          <a href="https://wbiznex.com/terms-and-condition.html">Terms & Condition</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
