import React from 'react';
import '../styles/ASkill.css'

export const ASkill = ({src, name}) => {
    return (
        <div className="a-skill-container"> 
            <img className="tech-image" src={require("../images/techs/"+ src +".svg")} alt="tech-pic"/>
            <p>{name}</p>
        </div>
    )
}