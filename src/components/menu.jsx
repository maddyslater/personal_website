import React from 'react';
import Resume from '../assets/resume.pdf';
import '../stylesheet.css';

const Menu = () => {

    let menuBar = document.querySelector('header');

    let PrevScrollPos = window.scrollY;
 
    window.addEventListener('scroll', function () {
        let currentScrollPos = window.scrollY;

        if (PrevScrollPos > currentScrollPos) {
            menuBar.classList.remove("hidden");
        } else {
            menuBar.classList.add("hidden");
        }

        PrevScrollPos = currentScrollPos;
    });

    return (
        <div>
            <header>
                <div className="scroll-watcher"></div>
                <div className="logo">Maddy Slater</div>
                <nav >
                    <ul>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a>Projects</a>
                        {/* <a href="#contact">Contact</a> */}
                        <a target='_blank' rel='noreferrer' href={Resume}>Resume</a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Menu;