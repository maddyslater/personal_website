import React from 'react'
import Resume from '../assets/Maddy_Slater_Resume.docx.pdf';
import '../stylesheets/menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <a className='menu-name'>Maddy Slater</a>
            <div className='menu-pages'>
                <a className='menu-page'>About</a>
                <a className='menu-page'>Weather!</a>
                <a className='menu-page' target='_blank' rel='noreferrer' href={Resume}>Resume</a>
            </div>
        </div>
    )
}

export default Menu;