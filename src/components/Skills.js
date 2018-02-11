import React from 'react';
import './Skills.css';

export const Skills = () => {
  return (
    <div id="my-skills" className="skills-container">

      <div>
        <h1>My Skills</h1>
        <hr/>
      </div>

      <div className="skills-inner-container">
        <div className="a-skill">
          <img className="skill-image" src={require("../images/skill-levels/beginner-2.png")} alt="skill-pic"/>
          <h2>Beginner</h2>
          <div className="tech-container">
            <i className="devicon-postgresql-plain-wordmark tech-font"></i>
            <div>
              <img className="tech-image" src={require("../images/techs/graphql.svg")} alt="tech-pic"/>
              <p>GraphQL</p>
            </div>
            <i className="devicon-django-plain-wordmark tech-font"></i>
            <i className="devicon-amazonwebservices-plain-wordmark tech-font"></i>
          </div>
        </div>
        
        <div className="a-skill">
          <img className="skill-image" src={require("../images/skill-levels/intermediate.png")} alt="skill-pic"/>
          <h2>Intermediate</h2>
          <div className="tech-container">
            <i className="devicon-python-plain-wordmark tech-font"></i>
            <i className="devicon-nodejs-plain-wordmark tech-font"></i>
            <i className="devicon-express-original-wordmark tech-font"></i>
            <div>
              <img className="tech-image" src={require("../images/techs/redux.svg")} alt="tech-pic"/>
              <p>Redux</p>
            </div>
            
          </div>
        </div>
        
        <div className="a-skill">
          <img className="skill-image" src={require("../images/skill-levels/advanced.png")} alt="skill-pic"/>
          <h2>Advanced</h2>
          <div className="tech-container">
            <i className="devicon-javascript-plain tech-font"></i>
            <i className="devicon-html5-plain-wordmark tech-font"></i>
            <i className="devicon-css3-plain-wordmark tech-font"></i>
            <i className="devicon-react-original-wordmark tech-font"></i>
            <i className="devicon-git-plain-wordmark tech-font"></i>
          </div>
        </div>
      </div>

    </div>
  )
}