import React from 'react';
import experienceData from '../../data/experience.json';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const visibleExperience = experienceData.filter(
    item => item.visibility !== 'hidden' && item.type !== 'Education'
  );

  return (
    <section className="experience" id="experience">
      <h2 className="heading"><i className="fas fa-briefcase"></i> Experience</h2>

      <div className="timeline-container">
        {visibleExperience.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={item.id} className={`timeline-block ${isLeft ? 'left' : 'right'} ${!item.featured ? 'secondary-item' : ''}`}>
              <div className="content">
                <div className="tag">
                  <h2>{item.company}</h2>
                </div>
                <div className="desc">
                  <h3>{item.role} | {item.type}</h3>
                  <p>{item.duration}</p>
                  {item.featured && <p className="details">{item.description}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
