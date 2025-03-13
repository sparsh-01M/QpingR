// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-column about-column">
        <h3>Helpline details</h3>
        <p>Email: <a href="mailto:support@qpingr.com">support@qpingr.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Head Office: 123 Tech Lane, Innovation City, CA 94043</p>
      </div>
      <div className="footer-column copyright-column">
        <p>© 2025 QpingR. All rights reserved.</p>
      </div>
      <div className="footer-column social-column">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://twitter.com/qpingr" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/company/qpingr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/qpingr" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;