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
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
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
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
          </div>  
        </div>
        

      </header>
    </div>
  );
}