import React from 'react'
import '../stylesheet.css';
import homePic from '../assets/homePic.jpeg'

const Home = () => {
    return (
        <div className="home-page">
            <div className="home-text">
                <h1 className="home-title">MADDY SLATER</h1>
                <h2 className="home-subtitle">Welcome to my website!</h2>
            </div>
            <img id='home-image' src={homePic} alt="Picture of sunset over mountain forest" />
        </div>
    )
}

export default Home;