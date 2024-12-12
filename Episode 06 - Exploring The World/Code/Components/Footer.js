import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </div>
        </div>

        <div className="footer-section policies">
          <h4>Policies</h4>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@swiggyclone.com</p>
          <p>Phone: +91 98193471981</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} - Sane Aalam "SwiggyDesign". All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
