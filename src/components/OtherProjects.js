import React from 'react';

function OtherProjects() {
  return (
    <section className='projects section'>
      <div className='section-inner shadow-sm rounded'>
        <h2 className='heading'>Other Projects</h2>
        <div className='content'>
          <div className='item'>
            <h3 className='title'>
              <a href='https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/'>
                Pillar - Free Boootstrap Resume/CV Template for Developers
              </a>
              <span className='badge badge-theme'>Free</span>
            </h3>
            <p className='summary'>
              Provide a brief description of your project. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatu.
            </p>
            <p>
              <a
                className='more-link'
                href='https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/'
              >
                <i className='fas fa-external-link-alt'></i>Download Now
              </a>
            </p>
          </div>

          <a className='btn btn-cta-secondary' href='/'>
            More on GitHub <i className='fas fa-chevron-right pt-1'></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
