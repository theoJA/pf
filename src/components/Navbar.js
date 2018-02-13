import React from 'react';
import "../styles/Navbar.css";

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
              <li><a href="https://drive.google.com/open?id=1eGgKzsMVPBusOISkSgq36afzg34C-a-O"
                      target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>
        
        </nav>

        <div className="banner-title">
          <div>
            <p>THEOPHILUS</p>
            <p>JEFFREY ALI</p>
          </div>  

          <div>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
          </div>  
        </div>
      </header>
    </div>
  );
}