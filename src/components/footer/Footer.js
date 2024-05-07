import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Madyantika. All rights reserved.</p>
          <p>Contact: info@madyantika.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
