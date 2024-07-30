import React from 'react';
import '../stylesheets/experience.css'; // Import the CSS
import uiPath from '../assets/uipath.png';
import simsola from '../assets/simsola.png';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: simsola,
      title: 'Simsola.ai',
      description: 'SWE Intern',
      extraDescription: 'Contributed to real-world projects, collaborating with cross-functional teams to deliver impactful solutions.',
      skills: ['Node.js', 'TypeScript', 'Scrum/Agile'],
    },
    {
      icon: uiPath,
      title: 'UIPath',
      description: 'SWE Intern',
      extraDescription: 'Developed critical skills in software engineering and project management through practical, on-the-job experience.',
      skills: ['Scrum/Agile', 'RPA', 'Git'],
    },
  ];

  return (
    <div className="experience-section">
      <div className="subtitle">Experience</div>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div
            className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="experience-icon">
              <img src={exp.icon} alt="Experience Icon" />
            </div>
            <div className="experience-title">{exp.title}</div>
            <div className="experience-description">{exp.description}</div>
            <div className="skills-banner">
              {exp.skills.map((skill, index) => (
                <span className="skill" key={index}>{skill}</span>
              ))}
            </div>
            <div className="experience-extra">
              <div className="experience-extra-content">
                {exp.extraDescription}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
