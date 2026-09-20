import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Prajwal Bhutkar</h1>
        <h3>
          Python Backend Developer with professional experience building APIs and backend systems using FastAPI and Django.
        </h3>
        <p>
          I work on third-party integrations, automation, production applications, and real-time systems.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/prajwal-bhutkar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/bhutkarprajwal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <a href="/docs/Prajwal_Bhutkar_R.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>

      <div className="home-img">
        <img src="/images/Prajwal.png" alt="Prajwal Bhutkar" />
      </div>
    </section>
  );
};

export default Hero;
