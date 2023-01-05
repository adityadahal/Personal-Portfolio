import React from 'react';
import { profile } from '../data/profile';

function LanguageSection() {
  return (
    <aside className='languages aside section'>
      <div className='section-inner shadow-sm rounded'>
        <h2 className='heading'>Languages</h2>
        <div className='content'>
          <ul className='list-unstyled'>
            {profile.languages.map((language, index) => {
              return (
                <li className='item'>
                  <span className='title'>
                    <strong>{language.name}: </strong>
                  </span>
                  <span className='level'>
                    {language.level} <br className='visible-xs' />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default LanguageSection;
