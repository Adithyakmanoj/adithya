import React from 'react';
import { FaInstagram, FaGithub, FaGoogle, FaMailBulk, FaMailchimp } from 'react-icons/fa'; 
import logo from '../../assets/download.png'; 
import './footer.css';  

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="logo">
          <img 
            src={logo}  
            alt="Logo"
            className="footer-logo"
          />
        </div>

        
        <p>&copy; 2024 Adithya. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li><br/>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>

        
        <div className="social-links">
          <ul>
            <li>
              <a href="https://www.instagram.com/adithya__manoj_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:adithyakmanoj@gmail.com">
                <FaGoogle className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Adithyakmanoj" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
