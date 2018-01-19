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
          
          <div className="logo">TJA</div>
          
          <div className="menu">
            <ul>
              <li><a href="#about-section">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Contact</a></li>
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
      <p id="about-section"></p>
    </div>
  );
}