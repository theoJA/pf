import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div>
        <h1>THINGS I'VE DONE</h1>
      </div>

      <div className="projects-shots">
        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/cutsforkids-png-rect.PNG")} alt="about-pic" />
          <h2>CutsForKids Web App</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>

        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/relay.jpg")} alt="about-pic" />
          <h2>Relay</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>

        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/employee-manager.jpg")} alt="about-pic" />
          <h2>Employee Manager</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>

        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/weather-map-cropped.png")} alt="about-pic" />
          <h2>Maps and Weather Forecast</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>

        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/video-browser-cropped.png")} alt="about-pic" />
          <h2>Video Browser</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>

        <div className="a-project">
          <img className="project-picture" src={require("../images/projects/rebellion-jpeg.jpg")} alt="about-pic" />
          <h2>Rebellion</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>
      </div>
    </div>
  )
}