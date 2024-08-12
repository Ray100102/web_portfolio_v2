import React from 'react';
import '../stylesheets/projects.css';
import igniteDB from '../assets/ignitedb.jpg';
import battlecode from '../assets/battlecode.jpg';
import og from '../assets/og.jpg';
import git from '../assets/github.png';
import www from '../assets/www.png';
const projects = [
  {
    id: 1,
    title: 'IgniteDB.io',
    description: 'IgniteDB is a full-stack project, comprised of comprehensive database of all teams within the VEX circuit, including detailed information on skills, match statistics, reveals, and team Elo.',
    imgSrc: igniteDB,
    siteLink: 'https://ignitedb.io/',
    githubLink: 'https://github.com/amolv0/exo-db',
    skills: ['React', 'HTML', 'CSS', 'JS', 'Python', 'AWS', 'Git']
  },
  {
    id: 2,
    title: 'MIT Battlecode 2023',
    description: 'In Battlecode, two teams of virtual robots roam the screen, managing resources and executing different offensive strategies against each other for a chance at more than $15,000 in prizes, hosted by MIT. My team and I placed 2nd place in documentation and 7th place overall out of 500+ college teams.',
    imgSrc: battlecode,
    siteLink: 'https://battlecode.org/assets/files/postmortem-2023-dont-at-me.pdf',
    githubLink: 'https://github.com/georgezhang02/battlecode23',
    skills: ['Java', 'Memory Managment', 'Git'],
  },
  {
    id: 3,
    title: 'Web Portfolio V_1',
    description: 'First version of my web portfolio',
    imgSrc: og,
    siteLink: 'https://ray100102.github.io/web_portfolio/',
    githubLink: 'https://github.com/Ray100102/web_portfolio',
    skills: ['HTML', 'CSS', 'JS'],
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <br/>
      <div className="subtitle">Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-links">
            <div className="project-skills">
                {project.skills.map((skill, skillIndex) => (
                  <span className="skill" key={skillIndex}>{skill}</span>
                ))}
            </div>
            <div 
              onClick={() => window.open(project.siteLink, '_blank', 'noopener,noreferrer')} 
              className="project-link"
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={www}
                alt="Click to visit site" 
                className="project-link-image"
              />
            </div>
            <div 
              onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')} 
              className="project-link"
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={git}
                alt="View on GitHub" 
                className="project-link-image"
              />
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
