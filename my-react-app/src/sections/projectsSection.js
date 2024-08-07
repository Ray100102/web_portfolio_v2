import React, { useState } from 'react';
import '../stylesheets/projects.css';
import igniteDB from '../assets/ignitedb.jpg'
const projects = [
  { id: 1, title: 'Project 1', description: 'Description 1', imgSrc: igniteDB, area: 'a' },
  { id: 2, title: 'Project 2', description: 'Description 2', imgSrc: 'https://via.placeholder.com/250', area: 'b' },
  { id: 3, title: 'Project 3', description: 'Description 3', imgSrc: 'https://via.placeholder.com/300', area: 'c' },
  { id: 4, title: 'Project 4', description: 'Description 4', imgSrc: 'https://via.placeholder.com/200', area: 'd' },
  { id: 5, title: 'Project 5', description: 'Description 5', imgSrc: 'https://via.placeholder.com/250', area: 'e' },
  { id: 6, title: 'Project 6', description: 'Description 6', imgSrc: 'https://via.placeholder.com/300', area: 'f' },
  { id: 7, title: 'Project 6', description: 'Description 6', imgSrc: 'https://via.placeholder.com/300', area: 'g' },
  { id: 8, title: 'Project 6', description: 'Description 6', imgSrc: 'https://via.placeholder.com/300', area: 'h' },
  { id: 9, title: 'Project 6', description: 'Description 6', imgSrc: 'https://via.placeholder.com/300', area: 'i' },
];

const ProjectsSection = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <div className = "parent-container">
      <div className="subtitle">Projects</div>
        <div className="projects-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.area} ${flippedCard === project.id ? 'flipped' : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="project-front">
                <img src={project.imgSrc} alt={project.title} className="project-image" />
              </div>
              <div className="project-back">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProjectsSection;
