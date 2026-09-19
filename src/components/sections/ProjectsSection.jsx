import React from 'react';
import projectsData from '../../data/projects.json';
import ProjectCard from '../ui/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const tier1Projects = projectsData.filter(p => p.tier === 1);
  const tier2Projects = projectsData.filter(p => p.tier === 2);
  const tier3Projects = projectsData.filter(p => p.tier === 3);

  const renderTier = (projects, title, isPersonal = false) => {
    if (projects.length === 0) return null;
    return (
      <div className={`project-tier ${isPersonal ? 'personal-tier' : ''}`}>
        {title && <h3 className="tier-title">{title}</h3>}
        <div className="portfolio-container">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} isPersonal={isPersonal} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="portfolio" id="work">
      <h2 className="heading">Selected <span>Work</span></h2>
      
      {renderTier(tier1Projects, "Featured Professional Work")}
      {renderTier(tier2Projects, "Professional Projects")}
      {renderTier(tier3Projects, "Personal Projects", true)}
      
    </section>
  );
};

export default ProjectsSection;
