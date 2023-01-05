import React from 'react';
import { profile } from '../data/profile';

// Image Import
import NawaBirthdayWisher from '../assets/images/projects/nawa_birthday_wisher.png';
import GharDailo from '../assets/images/projects/ghar_dailo.png';
import Halkapan from '../assets/images/projects/halkapan.png';
import SwingBookStore from '../assets/images/projects/bookstore_swing.png';
import RojgarNepal from '../assets/images/projects/rojgar_nepal.png';
import OmitLogo from '../assets/images/projects/omit_logo.png';
import IOTAR from '../assets/images/projects/iot_ar.png';
import BLogMERN from '../assets/images/projects/blog_mern.jpeg';
import ShortestPathFinder from '../assets/images/projects/shortestpathfinder.png';
import CrowdDetection from '../assets/images/projects/crowd_detection.png';

const getImageByProjectId = projectId => {
  switch (projectId) {
    case 1:
      return 'hello';
    case 'nawa-birthday':
      return NawaBirthdayWisher;
    case 'ghar-dailo':
      return GharDailo;
    case 'halkapan':
      return Halkapan;
    case 'swing-bookstore':
      return SwingBookStore;
    case 'rojgar-nepal':
      return RojgarNepal;
    case 'omit-note':
      return OmitLogo;
    case 'iot-ar':
      return IOTAR;
    case 'blog-mern':
      return BLogMERN;
    case 'shortest-path-finder':
      return ShortestPathFinder;
    case 'crowd-monitoring':
      return CrowdDetection;
    default:
      return 'default';
  }
};

function LatestProjects() {
  return (
    <section className='latest section'>
      <div className='section-inner shadow-sm rounded'>
        <h2 className='heading'>Personal Projects</h2>
        <div className='content'>
          {profile.projects.map((project, index) => {
            return (
              <div className='item row'>
                <a className='col-md-4 col-12' href={project.url}>
                  <img
                    className='img-fluid project-image rounded shadow-sm'
                    src={getImageByProjectId(project.id)}
                    alt={project.name}
                  />
                </a>
                <div className='desc col-md-8 col-12'>
                  <h3 className='title'>
                    <a href={project.url}>{project.name}</a>
                  </h3>
                  <p className='mb-2'>{project.description}</p>
                  {project.github && (
                    <>
                      <a href={project.github}>
                        {' '}
                        <i className='fab fa-github'></i> Source Code
                      </a>
                      <br />
                    </>
                  )}
                  {project.video && (
                    <>
                      <a href={project.video}>
                        {' '}
                        <i className='fab fa-youtube'></i> Demo Video
                      </a>
                      <br />
                    </>
                  )}
                  {project.website && (
                    <>
                      <a href={project.website}>
                        {' '}
                        <i className='fas fa-globe'></i> Website
                      </a>
                      <br />
                    </>
                  )}
                  <p></p>
                  <div className='d-flex flex-row flex-wrap'>
                    {project.tech.map(icon => {
                      return (
                        <i className={`devicon-${icon} colored pe-1`} style={{ fontSize: 40 }}></i>
                      );
                    })}
                  </div>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LatestProjects;
