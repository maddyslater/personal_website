import React from 'react'
import '../stylesheet.css'
import profilePic from '../assets/profilePic.jpg'

const About = () => {
    return (
        <div>
            {/* <h1 className="component-header">First, a little about me</h1>
            <h3 className="component-subheader">Hey, I'm Maddy</h3> */}
            <div className="about-container">
                <div className="about-image-container">
                    <img id="about-image" src={profilePic} alt="Profile Picture" />
                </div>
                <div className="about-text-container">
                    <h3 className="component-header">Hey, I'm Maddy</h3>
                    <p id="about-description">I'm a sophomore at Dartmouth College studying Computer Science and International Studies. I grew up in New York, and now I live in Bozeman, Montana and hope to pursue a career in software engineering!</p>
                </div>
            </div>
            <div className="interests-container">
                <h2 className="component-subheader">Some things I love:</h2>
                <div className="interest-items">
                    <ul>
                        <li><p>Skiing</p></li>
                        <li><p>Baking</p></li>
                        <li><p>Hiking & Backpacking</p></li>
                        <li><p>Gardening</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;