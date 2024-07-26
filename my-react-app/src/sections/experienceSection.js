import React from 'react';
import '../stylesheets/mainPage.css'; // Import the CSS

const ExperienceSection = () => {
  const experiences = [
    {
      icon: 'fas fa-code',
      title: 'SWE',
      description: 'Developed and maintained high-performance web applications using modern frameworks and technologies.',
      extraDescription: 'Worked on cutting-edge projects that pushed the boundaries of technology, focusing on scalability and performance.',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'SWE Intern',
      description: 'Gained hands-on experience in software development, testing, and deployment, contributing to several key projects.',
      extraDescription: 'Contributed to real-world projects, collaborating with cross-functional teams to deliver impactful solutions.',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'SWE Intern',
      description: 'Gained hands-on experience in software development, testing, and deployment, contributing to several key projects.',
      extraDescription: 'Developed critical skills in software engineering and project management through practical, on-the-job experience.',
    },
  ];

  return (
    <div className="experience-section">
      <div className="subtitle">Experience</div>
      {experiences.map((exp, index) => (
        <div
          className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
          key={index}
        >
          <div className="experience-icon">
            <i className={exp.icon}></i>
          </div>
          <div className="experience-title">{exp.title}</div>
          <div className="experience-description">{exp.description}</div>
          <div className="experience-extra">
            <div className="experience-extra-content">
              {exp.extraDescription}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
