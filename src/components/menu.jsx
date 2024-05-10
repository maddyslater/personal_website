import React from 'react';
import Resume from '../assets/resume.pdf';
import '../stylesheet.css';

const Menu = () => {
 
    return (
        <menu>
            <div className='scroll-watcher'></div>
            {/* <a className='menu-name'>Maddy Slater</a> */}
            <nav className='menu-pages'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#footer">Contact</a>
                <a target='_blank' rel='noreferrer' href={Resume}>Resume</a>
            </nav>
        </menu>
    )
}

export default Menu;