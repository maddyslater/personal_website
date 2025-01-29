import { useState } from 'react'
import './stylesheet.css'
import Menu from './components/menu'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import Projects from './components/projects';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Timeline from './components/timeline';

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
      <body>

        <Menu />

        <section id="home">
          <Home /> 
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Timeline />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <footer id="contact">
          <Contact />
        </footer>

      </body>
  )
  
}

export default App