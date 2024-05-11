import React from 'react'
import '../stylesheet.css'
import profilePic from '../assets/profilePic.jpg'

const About = () => {
    return (
        <div>
            <h1 className="component-header">About</h1>
            <h3 className="component-subheader">First, let me introduce myself...</h3>
            <div className="about-container">
                <img id="about-image" src={profilePic} alt="Profile Picture" />
                <p id="about-text"> My name is Maddy Slater and I am a sophomore at Dartmouth College studying Computer Science and International Studies. I grew up in New York, and now I live in Bozeman, Montana and hope to pursue a career in software engineering!</p>
            </div>
        </div>
    )
}

export default About;