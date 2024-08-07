import React, { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './stylesheets/colorTheme.css';
import './stylesheets/mainPage.css';
import './stylesheets/navbar.css';
import ImageCarousel from './components/imageCarousel.js';
import AboutSection from './sections/aboutSection';
import ExperienceSection from './sections/experienceSection';
import ProjectsSection from './sections/projectsSection';
import TitleSection from './sections/titleSection';
import NavBar from './components/navbar';
import useIntersectionObserver from './hooks/useIntersectionObserver'; // Import the custom hook

function App() {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const isTitleVisible = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const isAboutVisible = useIntersectionObserver(aboutRef, { threshold: .1});
  const isExperienceVisible = useIntersectionObserver(experienceRef, { threshold: 0.1});
  const isProjectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });

  return (
    <div className="page">
      <div id="home"/>
      <NavBar/>
      
      <div>
        <div ref={titleRef} className={`section ${isTitleVisible ? 'animate' : ''}`}>
          <TitleSection/>
        </div>

        <div id="about" ref={aboutRef} className={`section ${isAboutVisible ? 'animate' : ''}`}>
          <AboutSection/>
        </div>
        
        <div id="experience" ref={experienceRef} className={`section ${isExperienceVisible ? 'animate' : ''}`}>
          <ExperienceSection /> 
        </div>

        <div id="projects" ref={projectsRef} className={`section ${isProjectsVisible ? 'animate' : ''}`}>
          <ProjectsSection/>
        </div>
      </div>
    </div>
  );
}

export default App;
