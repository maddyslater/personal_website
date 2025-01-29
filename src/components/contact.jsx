import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet.css';
import ContactItems from './contactItems'

const Contact = () => {
    return(
        <div>
            <div className='contact-container'>
                {ContactItems.map((item)=> (
                        <div key={item.type} className='contact-type'>
                            <a className='contact-button' target="_blank" rel="noopener noreferrer" href={item.target}>
                                <FontAwesomeIcon icon={item.icon} className='contact-icon'></FontAwesomeIcon>
                            </a>
                            <a className='contact-title'>{item.title}</a>
                        </div>

                        
                ))}
            </div>
        </div>
    );
};

export default Contact;
