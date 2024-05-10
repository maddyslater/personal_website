import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet.css'
import profilePic from '../assets/profilePic.jpg'
import Skills from './skills'

const About = () => {
    return (
        <div>
            <h1 className="component-header">About</h1>
            <div className="about-container">
                <img id="about-image" src={profilePic} alt="Profile Picture" />
                <p id="about-text"> My name is Maddy Slater and I am a sophomore at Dartmouth College studying Computer Science and International Studies. I grew up in New York, and now I live in Bozeman, Montana and hope to pursue a career in software engineering!</p>
            </div>

            <div className='skills-container'>
                {Skills.map((item, index)=> (
                        <div key={item.skill} className='skillItem'>
                            <FontAwesomeIcon icon={item.icon} className='skillIcon'></FontAwesomeIcon>
                            <p className='skill'>{item.skill}</p>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default About;