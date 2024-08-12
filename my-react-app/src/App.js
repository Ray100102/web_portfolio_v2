import React, { useRef, useState, useEffect, useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './stylesheets/colorTheme.css';
import './stylesheets/mainPage.css';
import './stylesheets/navbar.css';
import ImageCarousel from './components/imageCarousel.js';
import AboutSection from './sections/aboutSection';
import ExperienceSection from './sections/experienceSection';
import ProjectsSection from './sections/projectsSection';
import TitleSection from './sections/titleSection';
import ContactSection from './sections/contactSection';
import NavBar from './components/navbar';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import ParticleBackground from './components/particleBackground';
import ParticleBackgroundLight from './components/particleBackgroundLight';
import { DarkModeContext } from './components/darkModeContext';

function App() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="page">
      <div id="home" />
      <NavBar />
      <div className = "indent">
        <div className={`section animate`}>
          {isDarkMode ? <ParticleBackground className = "particleBackground" /> : <ParticleBackgroundLight className = "particleBackground" />}
          <TitleSection />
        </div>

        <div id="about" className={`section animate`}>
          <AboutSection />
        </div>

        <div id="experience" className={`section animate`}>
          <ExperienceSection />
        </div>

        <div id="projects" className={`section animate`}>
          <ProjectsSection />
        </div>

        <div id="contact"  className={`section end animate`}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
