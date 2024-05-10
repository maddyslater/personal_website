import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet.css';
import Contacts from './contacts'
import Resume from '../assets/resume.pdf';



const Footer = () => {
    return(
        <div>
            <h2 className='component-header'>Contact Me!</h2>
            <div className='footerContainer'>
                {Contacts.map((item, index)=> (
                        <div key={item.type} className='contactType'>
                            <a className='contacts' target="_blank" rel="noopener noreferrer" href={item.target}>
                                <FontAwesomeIcon icon={item.icon} className='contactIcon'></FontAwesomeIcon>
                            </a>
                            <p className='contactLink'>{item.title}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;