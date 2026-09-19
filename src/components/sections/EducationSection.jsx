import React from 'react';
import experienceData from '../../data/experience.json';
import './EducationSection.css';

const EducationSection = () => {
  const educationItems = experienceData.filter(item => item.type === 'Education');

  if (educationItems.length === 0) return null;

  return (
    <div className="education" id="education">
      <h2 className="heading">My <span>Education</span></h2>

      <div className="education-container">
        {educationItems.map((item) => (
          <div key={item.id} className={`education-card ${!item.featured ? 'secondary-edu' : ''}`}>
            <div className="edu-icon">
              <i className="bx bxs-graduation"></i>
            </div>
            <div className="edu-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p className="edu-duration">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
