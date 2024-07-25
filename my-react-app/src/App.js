import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './stylesheets/colorTheme.css';
import './stylesheets/mainPage.css';
import './stylesheets/navbar.css';
import uwLogo from './assets/uw.png';
import pfp from './assets/temp_pfp.jpg';
import ImageCarousel from './components/imageCarousel.js';
import ScrollingBanner
 from './components/scrollingBanner.js';
 
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

      {/* NAV BAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <ul className="navbar-menu">
            
            <li className="navbar-item">
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#section1" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="#section2" className="navbar-link">Experience</a>
            </li>
            <li className="navbar-item">
              <a href="#section3" className="navbar-link">Projects</a>
            </li>
          </ul>
          <ul className="navbar-socials">
            <li className="navbar-item navbar-icon">
              <a href="https://www.linkedin.com/in/ray-g-903ab8200/" className="navbar-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="navbar-item navbar-icon">
              <a href="https://github.com/Ray100102" className="navbar-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="navbar-item navbar-icon">
              <a href="mailto:rguo10102@gmail.com" className="navbar-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="home"/>
      <div>
        <div className = "section">
          <div className = "titleBackground">
            <div className = "title">
              Ray&nbsp;&nbsp;
            </div>
            <div className = "title">
              &nbsp;&nbsp;Guo
            </div>
          </div>
          <div className="image-wrapper">
            <img src={pfp} className="profilePicture" />
          </div>
        </div>

        <div id="section1" className="section">
          <div className = "subtitle">
            ABOUT
          </div>
          <div className = "subtitle">
            ME
          </div>

          <section className="intro">
            <p className="intro-text">Hello!👋 </p>
            <p className="intro-text"> I'm Ray, a senior CS student @ UW-Seattle&nbsp;<img src={uwLogo} alt="UW Logo" className="uw-logo" />
            </p>
            <div className="intro-details">
              <p>
                Alongside majoring in computer science, I'm also pursuing a minor in philosophy, to hone my critical thinking skills and broaden my perspective on the societal impacts of computing.
              </p>
              
              <p>
                I'm currently looking for any SWE or Project Manager roles to further my career in the computer science industry!
              </p>
              
              <p>
                I am driven by a passion to create products that prioritize user-friendliness. My ultimate goal is to build solutions that seamlessly integrate into users' lives, providing a smooth and intuitive experience.
              </p>
              
              <p>
                I am skilled with programming languages like Java, Python, C++, and Swift as well as frameworks like Next.js and Node.js.
              </p>
              
              <p>
                Alongside working on this website, I've been working on personal projects to increase my knowledge in computer science. Scroll down to check out some of those projects!
              </p>
            </div>
          </section>
          
        </div>

        <div className="fullSection">
          <ImageCarousel></ImageCarousel>
        </div>

        <div id="section2" className="section">
          <div className = "subtitle">
            EXPERIENCE
          </div>
          <p>This is the second section.</p>
        </div>
        <div id="section3" className="section">
          <div className = "subtitle">
            PROJECTS
          </div>
          <p>Still Bubble format</p>
        </div>
      </div>
      </div>
  );
}

export default App;
