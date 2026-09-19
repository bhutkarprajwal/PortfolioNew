import React from 'react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = ({ project, isHeader = false }) => {
  if (!project) return null;

  if (project.id === 'lynkist') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Lynkist Technical Flow</div>
        <div className="arch-node">WhatsApp / Meta APIs</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">FastAPI Backend</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">PostgreSQL</div>
          <div className="arch-node">Redis</div>
          <div className="arch-node">Celery</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Dashboard / Automation</div>
      </div>
    );
  }

  if (project.id === 'real-time-trading-poc') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Real-Time Data Flow</div>
        <div className="arch-node">Broker / Real-Time Data</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Go Service</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Goroutines</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Redis</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Django / PostgreSQL</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">WebSocket</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">JavaScript UI</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Market Data / Order Updates</div>
      </div>
    );
  }

  // If this is called in the case study header and we just want an architecture diagram,
  // we might return null if there is no diagram. But we have a generic identity for cards.
  if (isHeader) {
     return null;
  }

  // Clean Project Identity Visual (Option C)
  return (
    <div className="arch-diagram generic-identity">
      <div className="identity-content">
        <i className='bx bx-code-alt identity-icon'></i>
        <h3 className="identity-title">{project.title}</h3>
        <span className="identity-category">{project.projectType} Project</span>
        {project.technologies && project.technologies.length > 0 && (
          <div className="identity-tech-badge">{project.technologies[0]}</div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
