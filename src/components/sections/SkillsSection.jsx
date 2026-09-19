import React from 'react';
import skillsData from '../../data/skills.json';
import SkillBadge from '../ui/SkillBadge';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>
      
      {skillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h3 className="category-title">{category.category}</h3>
          <div className="container">
            <div className="row">
              {category.skills.map((skill, i) => (
                <SkillBadge key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
