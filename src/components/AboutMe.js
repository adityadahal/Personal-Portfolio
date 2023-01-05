import React from 'react';
import { profile } from '../data/profile';

function AboutMe() {
  return (
    <section class='about section'>
      <div class='section-inner shadow-sm rounded'>
        <h2 class='heading'>About Me</h2>
        <div class='content'>
          <p>{profile.description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
