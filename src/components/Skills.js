import React from 'react';
import { ASkill } from "./ASkill";
import '../styles/Skills.css';

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
            <ASkill src="postgresql" name="PostgreSQL"/>
            <ASkill src="graphql" name="GraphQL"/>
            <ASkill src="django" name="Django"/>
            <ASkill src="amazon-web-services-1" name="AWS"/>
          </div>
        </div>
        
        <div className="a-skill">
          <img className="skill-image" src={require("../images/skill-levels/intermediate.png")} alt="skill-pic"/>
          <h2>Intermediate</h2>
          <div className="tech-container">
            <ASkill src="redux" name="Redux"/>
            <ASkill src="nodejs-icon" name="NodeJS"/>
            <ASkill src="firebase-1" name="Firebase"/>
            <ASkill src="mongo-logo" name="MongoDB"/>
            <ASkill src="python-5" name="Python"/>
            <ASkill src="c" name="C++"/>
            <ASkill src="java-14" name="Java"/>
          </div>
        </div>
        
        <div className="a-skill">
          <img className="skill-image" src={require("../images/skill-levels/advanced.png")} alt="skill-pic"/>
          <h2>Advanced</h2>
          <div className="tech-container">
            <ASkill src="react" name="React"/>
            <ASkill src="javascript" name="JavaScript"/>
            <ASkill src="html5" name="HTML5"/>
            <ASkill src="css3" name="CSS3"/>
            <ASkill src="git-icon" name="Git"/>
          </div>
        </div>
      </div>

    </div>
  )
}