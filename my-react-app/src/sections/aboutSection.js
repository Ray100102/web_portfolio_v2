import React from 'react';
import uwLogo from '../assets/uw.png';
import '../stylesheets/about.css';
import ScrollingBanner from '../components/scrollingBanner';
import ImageCarousel from '../components/imageCarousel.js';
const AboutSection = () => {
  return (
    <div>
      <div className="subtitle">ABOUT ME</div>
      <section className="intro">
        <p className="intro-text">Hello!</p>
        <p className="intro-text">
          I'm Ray, a senior CS student @ UW-Seattle&nbsp;
          <img src={uwLogo} alt="UW Logo" className="uw-logo" />
        </p>
        <div className="intro-details">
          <p>
            I am driven by a passion to create products that prioritize user-friendliness.  My ultimate goal is to build solutions that seamlessly integrate into users' lives, providing a smooth and intuitive experience :)
          </p>
          <p>
            I'm currently looking for any SWE or PM roles within tech to further my career!
          </p>
          <p>
            Including this website, I've been working on personal projects to further my skills in CS. Please feel free to explore the site!
          </p>
        </div>
      </section>

      <ScrollingBanner reverse={false}></ScrollingBanner>

      <ImageCarousel/>
    </div>
  );
};

export default AboutSection;