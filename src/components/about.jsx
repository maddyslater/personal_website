import React from 'react'
import '../stylesheet.css'
import profilePic from '../assets/profilePic.jpg'

const About = () => {
    return (
        <div>
            <h1 className="component-header">About Me</h1>
            <h3 className="component-subheader">Hey, I'm Maddy</h3>
            <div className="about-container">
                <img id="about-image" src={profilePic} alt="Profile Picture" />
                <p id="about-text">I'm a sophomore at Dartmouth College studying Computer Science and International Studies. I grew up in New York, and now I live in Bozeman, Montana and hope to pursue a career in software engineering!</p>
            </div>
        </div>
    )
}

export default About;