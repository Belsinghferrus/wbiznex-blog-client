import React from 'react'
import './css/footer.css'
import logo from '../assets/wbiznex-invert-logo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <div className='logo-section'>
            <img src={logo} alt="WBIZNEX Logo" className="footer-logo" />
            <h3>WBIZNEX</h3>
          </div>
          <p className="footer-description">
            World Business Nexus is a global business networking platform connecting entrepreneurs and businesses worldwide.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-instagram" />
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
          <a href="">privacy policy</a>
          
          <a href="">Terms & Condition</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
