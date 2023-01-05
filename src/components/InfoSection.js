import React from 'react';
import { profile } from '../data/profile';

function InfoSection() {
  return (
    <aside className='info aside section'>
      <div className='section-inner shadow-sm rounded'>
        <h2 className='heading sr-only'>Basic Information</h2>
        <div className='content'>
          <ul className='list-unstyled'>
            <li>
              <i className='fas pe-1 fa-map-marker-alt'></i>
              <span className='sr-only'>Location:</span>
              {profile.contact.address}
            </li>
            <li>
              <i className='fas pe-1 fa-envelope'></i>
              <span className='sr-only'>Email:</span>
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            </li>
            <li>
              <i className='fas pe-1 fa-link'></i>
              <span className='sr-only'>Website:</span>
              <a href={profile.contact.website}>{profile.contact.website}</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default InfoSection;
