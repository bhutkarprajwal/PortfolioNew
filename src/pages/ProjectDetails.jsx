import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import ArchitectureDiagram from '../components/ui/ArchitectureDiagram';
import SEO from '../components/ui/SEO';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project "{id}" not found.</h2>
        <button className="back-btn" onClick={() => navigate('/#work')}>← Back to Home</button>
      </div>
    );  }

  const isPublic = project.public && project.visibility === "Public";
  const seoTitle = isPublic ? `${project.title} | Prajwal Bhutkar` : 'Project Details | Prajwal Bhutkar';
  const seoDescription = isPublic ? project.shortDescription : 'Confidential project details.';
  const seoCanonical = isPublic ? `https://portfolio-prajwal--bhutkar.vercel.app/project/${id}` : null;

  return (
    <div className="project-details-page">
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        canonicalUrl={seoCanonical} 
        noindex={!isPublic} 
      />
      <header className="project-header">
        <h1>{project.title}</h1>
        <button className="back-btn" onClick={() => navigate('/#work')}>← Back to Portfolio</button>
      </header>

      <div className="project-layout">
        {/* Sidebar for Metadata */}
        <aside className="project-sidebar">
          <div className="sidebar-section">
            <h3>Status</h3>
            <div className="status-badges">
              <span className="badge type">{project.projectType}</span>
              <span className="badge status">{project.status}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>My Role</h3>
            <p className="role-title">{project.role}</p>
          </div>

          <div className="sidebar-section">
            <h3>Technologies</h3>
            <div className="tech-stack">
              {project.technologies?.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn">🚀 View Live</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">💻 GitHub Repository</a>
            )}
          </div>
        </aside>

        <main className="project-main">
          <div className="project-visual-header">
            <ArchitectureDiagram project={project} isHeader={true} />
          </div>

          <div className="case-study-section">
            <h3>Context</h3>
            <p>{project.context || project.shortDescription}</p>
          </div>

          {project.problem && (
            <div className="case-study-section">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
          )}

          <div className="case-study-section highlight">
            <h3>My Contribution</h3>
            <p>{project.contribution}</p>
          </div>

          {project.architecture && (
            <div className="case-study-section">
              <h3>Technical Approach / Architecture</h3>
              <p>{project.architecture}</p>
            </div>
          )}

          {project.keyChallenges && (
            <div className="case-study-section">
              <h3>Key Challenges</h3>
              <p>{project.keyChallenges}</p>
            </div>
          )}

          {project.testingReliability && (
            <div className="case-study-section">
              <h3>Testing / Reliability</h3>
              <p>{project.testingReliability}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
