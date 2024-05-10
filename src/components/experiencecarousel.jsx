import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import ExperienceItems from './experienceItems'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ExperienceCarousel = () => {
  return (
    <div style={{ width: '80%', margin: 'auto'}}>
        <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} >
        {/* <div><img src="image1.jpg" alt="Image 1"/></div> */}
        {ExperienceItems.map((item, index) => (
            <div key={item.title} className='experience-item'>
              <div>
                <img id="experience-image" src={item.image} />
              </div>

              <div className='experience-text'>
                <p className='experience-company'>{item.company}</p>
                <p className='experience-time'>{item.time}</p>
              </div>
            </div>

        ))}
        </Carousel>
    </div>
  );
};

export default ExperienceCarousel;