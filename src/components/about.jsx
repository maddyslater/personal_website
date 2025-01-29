import Skills from './skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet.css'
import profilePic from '../assets/profilePic.jpg'

const About = () => {
    return (
        <div>
            {/* <h1 className="component-header">First, a little about me</h1>
            <h3 className="component-subheader">Hey, I'm Maddy</h3> */}
            <h1 className="component-header">About</h1>
            <div className="about-container">
                <div className="about-image-container">
                    <img id="about-image" src={profilePic} alt="Profile Picture" />
                </div>
                <div className="about-text-container">
                    <p id="about-description">Hey, I&#39;m Maddy! I&#39;m a junior at Dartmouth College studying 
                    Computer Science. I grew up in New York, and now I live in Bozeman, Montana with my two black labs, Nova and Winter.
                    I love learning about full-stack development and am hoping to one day pursue a career in software engineering!</p>
                </div>
            </div>
            <h3 className='component-subheader'>Languages & Tools</h3>
                        <div className='skills-container'>
                            {Skills.map((item)=> (
                                <div key={item.skill} className='skill-item'>
                                    <FontAwesomeIcon icon={item.icon} className='skill-icon'></FontAwesomeIcon>
                                    <p className='skill-name'>{item.skill}</p>
                                </div>
                            ))}
                        </div>
        </div>
    )
}

export default About;