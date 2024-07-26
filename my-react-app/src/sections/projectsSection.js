import React from 'react';
import '../stylesheets/mainPage.css'; // Import the CSS for the ProjectsSection

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div>
      <div className="subtitle">PROJECTS</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="card-back">
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
