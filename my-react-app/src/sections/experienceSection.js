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
      extraDescription: [
        'Interned at Simsola.ai, a startup focused on AI-driven career coaching solutions.',
        'Integrated a custom-trained LLM into the platform, alongside implementing features such as real-time messaging, user authentication, and data synchronization using Node.js.',
        'Designed and implemented a scalable Google Firebase architecture for efficient storage of messaging, user, and coaching data.',
        'Collaborated in a Scrum Agile environment',
      ],
      skills: ['Node.js', 'TypeScript', 'Scrum/Agile'],
    },
    {
      icon: uiPath,
      title: 'UIPath',
      description: 'High School Intern',
      extraDescription: [
        'Worked with RPA and Git tools.',
        'Learned about automation pipelines.',
        'Worked with UiPath to automate workflows.',
        'Gained insight into industry standards and best practices.'
      ],
      skills: ['Scrum/Agile', 'RPA', 'Git'],
    },
  ];

  return (
    <div className="experience-section">
      <div className="subtitle">Experience</div>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">
              <img src={exp.icon} alt="Experience Icon" />
            </div>
            <div className="experience-content">
              <div className="experience-title">{exp.title}</div>
              <div className="experience-description">{exp.description}</div>
              <div>
                {exp.extraDescription.map((item, itemIndex) => (
                  <div  className="extra-description "key={itemIndex}>{item}</div>
                ))}
              </div>
              <div className="skills-banner">
                {exp.skills.map((skill, skillIndex) => (
                  <span className="skill" key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
