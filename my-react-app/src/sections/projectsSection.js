import React from 'react';
import '../stylesheets/projects.css';
import igniteDB from '../assets/ignitedb.jpg';

const projects = [
  {
    id: 1,
    title: 'IgniteDB.io',
    description: 'This is a brief description of Project 1.',
    imgSrc: igniteDB,
    siteLink: 'https://ignitedb.io/',
    githubLink: 'https://github.com/amolv0/exo-db',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a brief description of Project 2.',
    imgSrc: 'https://via.placeholder.com/250',
    siteLink: 'https://project2.com',
    githubLink: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <div className="subtitle">Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Site
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
