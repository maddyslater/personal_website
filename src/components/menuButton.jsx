import React, {useState} from 'react'
import Resume from '../assets/resume.pdf';
import '../stylesheet.css';

const MenuButton = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);
 
    const openMenu = () => 
        console.log(`Menu is ${isExpanded ? "expanded" : "collapsed"}.`);
        setIsExpanded(true);
    const closeMenu = () => setIsExpanded(false);


    return (
        <div>
        <button id="menuButton" onClick={openMenu}>
        Menu
        </button>
        <div id="menuItems" className={isExpanded ? 'menuShown' : ''}>
            <a href="#home" className="menuLink">Home</a>
            <a href="#about" className="menuLink">About</a>
            <a className = 'menuLink' target='_blank' rel='noreferrer' href={Resume}>Resume</a>
            <a href="#contact" className="menuLink">Contact</a>
        </div>
    </div>

    )
    
}

export default MenuButton;