import React from 'react';
import { profile } from '../data/profile';

function EducationSection() {
  return (
    <aside className='education aside section'>
      <div className='section-inner shadow-sm rounded'>
        <h2 className='heading'>Education</h2>
        <div className='content'>
          {profile.educations.map((education, index) => {
            return (
              <div className='item'>
                <h3 className='title'>
                  <i className='fas fa-graduation-cap'></i> {education.degree}
                </h3>
                <h4 className='university'>
                  {education.school} <span className='year'>({education.duration})</span>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default EducationSection;
