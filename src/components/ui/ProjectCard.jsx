import React from 'react';
import { Link } from 'react-router-dom';
import ArchitectureDiagram from './ArchitectureDiagram';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const isFeatured = project.tier === 1;

  // Use diagram for all core projects (non-legacy)
  const useDiagram = project.projectType !== 'Legacy';

  return (
    <div className={`project-card ${isFeatured ? 'featured-card' : 'compact-card'}`}>
      <div className="card-visual">
        {/* Only show the status/type badge ONCE. If Personal, show Personal, else Status */}
        <div className="card-badge">
          {project.projectType === 'Personal' ? 'Personal Project' : project.status}
        </div>
        
        {useDiagram ? (
          <ArchitectureDiagram project={project} />
        ) : (
          <img src={project.screenshots[0]} alt={project.title} />
        )}
      </div>
      
      <div className="card-content">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-description">{project.shortDescription}</p>
        
        <div className="card-tech">
          {project.technologies?.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-chip">{tech}</span>
          ))}
          {project.technologies?.length > 4 && <span className="tech-chip">+{project.technologies.length - 4}</span>}
        </div>

        <div className="card-actions">
          <Link to={`/project/${project.id}`} className="view-case-study">
            View Case Study →
          </Link>
          <div className="external-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Site">
                <i className='bx bx-link-external'></i>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                <i className='bx bxl-github'></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
