import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './stylesheets/colorTheme.css';
import './stylesheets/mainPage.css';
import './stylesheets/navbar.css';
import uwLogo from './assets/uw.png';
import pfp from './assets/temp_pfp.jpg';
import ImageCarousel from './components/imageCarousel.js';
import ScrollBanner from './components/scrollingBanner.js';
import AboutSection from './sections/aboutSection';
import ExperienceSection from './sections/experienceSection';
import ProjectsSection from './sections/projectsSection';
import TitleSection from './sections/titleSection';
import NavBar from './components/navbar';

function App() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <div id="home"/>
      <NavBar/>
      <div>
        <div className = "section">
          <TitleSection/>
          <ScrollBanner/>
        </div>

        <div id="about" className="section">
          <AboutSection/>
        </div>

        <div className="fullSection">
          <ImageCarousel/>
        </div>
        
        <div id="experience" className="section">
          <ExperienceSection /> 
        </div>

        <div id="projects" className="section">
          <ProjectsSection/>
        </div>
      </div>
      </div>
  );
}

export default App;
