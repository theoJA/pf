import React from 'react';
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">

      <div>
        <h1>About Me</h1>
      </div>

      <div className="about-desc-container">
        <img className="about-picture" src={require("../images/about-picture-fixed.jpg")} alt="about-pic" />
        
        <div className="about-desc-text">
          <p>
            Hi, I'm Theo. I've always had a passion for drawing and designing since I was a child and getting into web development 
            made it easier for me to bring those designs to fruition.  
          </p>
          <p>
            Besides web development I have also expressed interest in human-computer interaction, data-driven science, algorithms pertaining 
            to machine learning and game playing, as well as human perception.
          </p>
          <p>
            I am always curious about what makes a product successful and strive to match that same level of quality in the applications that I work
            on.
          </p>
        </div>
      </div>

      <div>
        <h1 id="what-i-do">What I Do</h1>
      </div>
        
      <div className="what-i-do-container">
        <div>
          <i className="fa fa-pencil fa-4x"></i>
          <h2>UI/UX</h2>
          <p>I design iteratively through sketching and wireframing, and focus on creating a minimalistic yet 
            intuitive interface. I always try to put myself in the user's shoes and critique my own 
            designs as I go. I believe in the design philosophy that less is more. 
          </p>
        </div>
        
        <div>
          <i className="fa fa-code fa-4x"></i>
          <h2>Code</h2>
          <p>I mainly focus on front end development using React as my go-to JavaScript library. 
            I can do quite a bit of back end development when the need arises. I have also developed 
            cross-platform mobile applications using React Native.   
          </p>
        </div>
      </div>

    </div>
  )
}