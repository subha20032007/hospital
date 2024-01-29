import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>123 Hospital St, Delhi</p>
          <p>Email: info@hospitalapp.com</p>
          <p>Phone: +91 1234567890</p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <i className="fab fa-facebook-f">f</i>
            <i className="fab fa-x">x</i>
            <i className="fab fa-instagram">i</i>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; 2024 Hospital App. All rights reserved.</p>
      </div>
    </footer>
  );
};
