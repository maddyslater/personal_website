import React from 'react'
import '../stylesheet.css'
import ExperienceCarousel from './experiencecarousel'
import Skills from './skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
    return (
        <div>
            <h1 className='component-header'>Experience</h1>
            <div className='experience-container'>
                <h3 className='component-subheader'>Work History</h3>
                <ExperienceCarousel />
                <h3 className='component-subheader'>Skills & Languages</h3>
                <div className='skills-container'>
                {Skills.map((item, index)=> (
                        <div key={item.skill} className='skill-item'>
                            <FontAwesomeIcon icon={item.icon} className='skill-icon'></FontAwesomeIcon>
                            <p className='skill-name'>{item.skill}</p>
                        </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Experience;