import React from 'react';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <header className="banner-container">
        <nav>
          
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          
          <a href="#banner-section"><div className="logo">TJA</div></a>
          
          <div className="menu">
            <ul>
              <li><a href="#about-section">About</a></li>
              <li><a href="#projects-section">Projects</a></li>
              <li><a href="#skills-section">Skills</a></li>
              <li><a href="#contact-section">Contact</a></li>
            </ul>
          </div>
        
        </nav>

        <div className="banner-title">
          <div>
            <p>THEOPHILUS</p>
            <p>JEFFREY ALI</p>
          </div>  

          <div>
            <p>DESIGNER</p>
            <p>DEVELOPER</p>
          </div>  
        </div>
      </header>
    </div>
  );
}