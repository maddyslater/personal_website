import { useState, useEffect, useLayoutEffect } from 'react'
import './stylesheet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeFlag } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/menu'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import Experience from './components/experience';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const [scrolled, setScroll] = useState(false);

  window.onscroll = function() {

    if (window.scrollY >= window.innerHeight/10) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  };

  return (
    <div>

      <body>

        <Menu />

        <component id="home">
          <Home /> 
          {/* <div className="home-page">
            <h1 className="home-title">MADDY SLATER</h1>
            <h2 className="home-subtitle">Welcome to my website!</h2>
          </div> */}
        </component>
        
        <component id="about">
          <About />
        </component>

        <component id="experience">
          <Experience />
        </component>

        {/* <Contact /> */}
        <footer id="contact">
          <Contact />
        </footer>

      </body>
  </div>
  )
  
}

export default App