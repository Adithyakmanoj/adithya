import React from 'react';
import './Navbar.css';
import logo from '../../assets/download.png';  

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
