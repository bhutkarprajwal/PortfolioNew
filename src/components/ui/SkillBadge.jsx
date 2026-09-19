import React from 'react';

const SkillBadge = ({ name, icon }) => {
  return (
    <div className="bar">
      <div className="info">
        <img src={icon} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SkillBadge;
