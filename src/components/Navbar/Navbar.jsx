import React from 'react'
import './Navbar.css'
import logo from '../../assets/download.png'


function Navbar() {
    return (
        <nav>
           
          <div className='navbar'>
            <img src={logo} alt='image' className='logo'/>
         
           <ul className='nav-menu'>
           <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li> <a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
            <div className='nav-connect'>
          <a href="/conect" className='nav-connect'>conect me</a>
          </div>
          </div>
          
        </nav>
      );
}

export default Navbar
