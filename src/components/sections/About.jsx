import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-main">
        
       <div className="about-content">
  <h2 className="heading">About <span>Me</span></h2>

  <div className="about-text">
    <h3 className="greeting">Hi, I'm Prajwal.</h3>

    <p>
      I'm a Python Backend Developer with around 2 years of professional experience, mainly working on real-world applications and backend systems.
    </p>

    <p>
      I mostly work with Python, FastAPI and Django, building APIs, backend services and integrations. My work has involved databases, background processing, third-party APIs, WhatsApp/Meta integrations, broker integrations, payment systems and real-time data.
    </p>

    <p>
      Apart from development, I also work on testing, UAT, production issue debugging and understanding how a feature should work end to end. In my current role, I also take technical ownership of backend features, coordinate with teammates and work closely with the product side during implementation.
    </p>

    <p>
      I enjoy working on backend problems where I can understand the flow, find what is going wrong, build the solution and improve it.
    </p>
  </div>
</div>

<div className="about-visual">
  <div className="engineering-panel">

    <div className="engineering-header">
      <div>
        <span className="engineering-label">ENGINEERING FOCUS</span>
        <h3>Python Backend</h3>
      </div>

      <div className="engineering-badge">
        <span className="status-dot"></span>
        Backend Development
      </div>
    </div>

    <div className="engineering-core">
      <div className="core-symbol">
        <span>Py</span>
      </div>

      <div className="core-content">
        <h4>Building Backend Systems</h4>
        <p>
          APIs, integrations, background processing and real-time
          application features.
        </p>
      </div>
    </div>

    <div className="engineering-grid">

      <div className="engineering-card">
        <div className="card-top">
          <span className="card-index">01</span>
          <span className="card-line"></span>
        </div>

        <h4>Backend</h4>

        <div className="tech-list">
          <span>Python</span>
          <span>FastAPI</span>
          <span>Django</span>
          <span>REST APIs</span>
        </div>
      </div>

      <div className="engineering-card">
        <div className="card-top">
          <span className="card-index">02</span>
          <span className="card-line"></span>
        </div>

        <h4>Data & Processing</h4>

        <div className="tech-list">
          <span>PostgreSQL</span>
          <span>MySQL</span>
          <span>Redis</span>
          <span>Celery</span>
        </div>
      </div>

      <div className="engineering-card">
        <div className="card-top">
          <span className="card-index">03</span>
          <span className="card-line"></span>
        </div>

        <h4>Integrations</h4>

        <div className="tech-list">
          <span>Meta / WhatsApp</span>
          <span>Webhooks</span>
          <span>Broker APIs</span>
          <span>Payments</span>
        </div>
      </div>

      <div className="engineering-card">
        <div className="card-top">
          <span className="card-index">04</span>
          <span className="card-line"></span>
        </div>

        <h4>Real-time & Systems</h4>

        <div className="tech-list">
          <span>WebSockets</span>
          <span>Go</span>
          <span>Automation</span>
          <span>Testing & UAT</span>
        </div>
      </div>

    </div>

    <div className="engineering-footer">
      <span>Build</span>
      <span className="footer-divider">/</span>
      <span>Integrate</span>
      <span className="footer-divider">/</span>
      <span>Debug</span>
      <span className="footer-divider">/</span>
      <span>Improve</span>
    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default About;
