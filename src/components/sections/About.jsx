import React from 'react';
import EducationSection from './EducationSection';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-main">
        
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <div className="about-text">
            <h3 className="greeting">Hi, I'm Prajwal.</h3>
            <p>I'm a Python Backend Developer with around 2 years of professional experience working on real-world applications and backend systems.</p>
            <p>I mainly work with Python, FastAPI and Django, building REST APIs, backend services and integrations with third-party platforms. I've worked with databases and background processing using PostgreSQL, MySQL, Redis and Celery, along with systems involving WhatsApp/Meta APIs, broker integrations, payment integrations and real-time data.</p>
            <p>Along with development, I work on testing, UAT, production issue debugging and understanding product requirements. In my current role, I also take technical ownership of features, coordinate with teammates and work closely with the product side to get things implemented properly.</p>
            <p>I enjoy backend problems where there is something to understand, build, debug and improve.</p>
          </div>
        </div>

        <div className="about-visual">
          <div className="tech-diagram">
            <h3 className="diagram-title">PYTHON BACKEND</h3>
            
            <div className="tech-row">
              <span className="tech-node core">APIs</span>
              <span className="tech-node core highlight">FastAPI</span>
              <span className="tech-node core highlight">Django</span>
            </div>
            
            <div className="tech-connector">↓</div>

            <div className="tech-row">
              <span className="tech-node data">PostgreSQL</span>
              <span className="tech-node data">Redis</span>
              <span className="tech-node data">MySQL</span>
            </div>

            <div className="tech-connector">↓</div>

            <div className="tech-row">
              <span className="tech-node ops">Integrations</span>
              <span className="tech-node ops">Celery</span>
              <span className="tech-node ops">Real-time</span>
            </div>

            <div className="tech-connector">↓</div>

            <div className="tech-row single">
              <span className="tech-node ai">AI / ML / Automation</span>
            </div>
          </div>
        </div>
      </div>
      
      <EducationSection />
    </section>
  );
};

export default About;
