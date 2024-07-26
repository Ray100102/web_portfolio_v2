import React from 'react';
import uwLogo from '../assets/uw.png'; // Adjust the path if necessary
import '../stylesheets/mainPage.css'; // Import the CSS for the AboutSection

const AboutSection = () => {
  return (
    <div id="section1" className="section">
      <div className="subtitle">ABOUT</div>
      <div className="subtitle">ME</div>

      <section className="intro">
        <p className="intro-text">Hello!</p>
        <p className="intro-text">
          I'm Ray, a senior CS student @ UW-Seattle&nbsp;
          <img src={uwLogo} alt="UW Logo" className="uw-logo" />
        </p>
        <div className="intro-details">
          <p>
            I am driven by a passion to create products that prioritize user-friendliness. My ultimate goal is to build solutions that seamlessly integrate into users' lives, providing a smooth and intuitive experience.
          </p>
          <p>
            I am skilled with programming languages like Java, Python, C++, and Swift as well as frameworks like Next.js and Node.js.
          </p>
          <p>
            I'm currently looking for any SWE or Project Manager roles to further my career in the computer science industry!
          </p>
          <p>
            Including this website, I've been working on personal projects to further my skills in computer science! Please feel free to explore the site!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;