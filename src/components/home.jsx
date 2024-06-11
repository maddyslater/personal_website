import React from 'react'
import '../stylesheet.css';
import homePic from '../assets/snow.jpg'

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-main-container">
                <h1 className="home-title">Maddy Slater</h1>
                {/* <h2 className="home-subtitle">Welcome to my website!</h2> */}
                <img id='home-image' src={homePic} alt="Picture of sunset over mountain forest" />
                
            </div>
            <h2 className="home-link">Read more <a href="#about" >about me ↓</a></h2>
        </div>
    )
}

export default Home;