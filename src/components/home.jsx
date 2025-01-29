import '../stylesheet.css';
import homePic from '../assets/snow.jpg'

const Home = () => {
    window.addEventListener('scroll', function () {
        const title = document.querySelector('.home-title');
        const link = document.querySelector('.home-link');
        let scrollPos = window.scrollY;

        title.style.transform = 'translateY(' + scrollPos * -.5 + 'px)';
        link.style.transform = 'translateY(' + scrollPos * 2 + 'px)';

    });

    return (
        <div className="home-page">
            <div className="home-text-container">
                <h1 className="home-title">MADDY SLATER</h1>
                {/* <h2 className="home-subtitle">Welcome to my website!</h2> */}
                <h2 className="home-link">Welcome to my <a href="#about" >website ↓</a></h2>
                {/* <img id='home-image' src={homePic} alt="Picture of sunset over mountain forest" /> */}
            </div>
            <div className='home-image-container'>
                <img id='home-image' src={homePic} alt="Picture of sunset over mountain forest" />
            </div>
            {/* <h2 className="home-link">Read more <a href="#about" >about me ↓</a></h2> */}
        </div>
    )
}

export default Home;