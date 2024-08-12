import React, { useRef, useState, useEffect } from 'react';
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

function App() {
  const titleRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [titleAnimated, setTitleAnimated] = useState(false);
  const [aboutAnimated, setAboutAnimated] = useState(false);
  const [experienceAnimated, setExperienceAnimated] = useState(false);
  const [projectsAnimated, setProjectsAnimated] = useState(false);
  const [contactAnimated, setContactAnimated] = useState(false);

  const isTitleVisible = useIntersectionObserver(titleRef, { threshold: 0.1 });
  const isAboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const isExperienceVisible = useIntersectionObserver(experienceRef, { threshold: 0.1 });
  const isProjectsVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });
  const isContactVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });

  useEffect(() => {
    if (isTitleVisible && !titleAnimated) setTitleAnimated(true);
  }, [isTitleVisible, titleAnimated]);

  useEffect(() => {
    if (isAboutVisible && !aboutAnimated) setAboutAnimated(true);
  }, [isAboutVisible, aboutAnimated]);

  useEffect(() => {
    if (isExperienceVisible && !experienceAnimated) setExperienceAnimated(true);
  }, [isExperienceVisible, experienceAnimated]);

  useEffect(() => {
    if (isProjectsVisible && !projectsAnimated) setProjectsAnimated(true);
  }, [isProjectsVisible, projectsAnimated]);

  useEffect(() => {
    if (isContactVisible && !contactAnimated) setContactAnimated(true);
  }, [isContactVisible, contactAnimated]);

  return (
    <div className="page">
      <div id="home" />
      <NavBar />

      <div>
        <div ref={titleRef} className={`section ${titleAnimated ? 'animate' : ''}`}>
          <TitleSection />
        </div>

        <div id="about" ref={aboutRef} className={`section ${aboutAnimated ? 'animate' : ''}`}>
          <AboutSection />
        </div>

        <div id="experience" ref={experienceRef} className={`section ${experienceAnimated ? 'animate' : ''}`}>
          <ExperienceSection />
        </div>

        <div id="projects" ref={projectsRef} className={`section ${projectsAnimated ? 'animate' : ''}`}>
          <ProjectsSection />
        </div>

        <div id="contact" ref={contactRef} className={`section ${contactAnimated ? 'animate' : ''}`}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
