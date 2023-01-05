import React from "react";
import { profile } from "../data/profile";

function ExperienceSection() {
  return (
    <section className="experience section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Work Experience</h2>
        <div className="content">
          {profile.experiences.map((experience, index) => {
            return (
              <div className="item">
                <h3 className="title">
                  {experience.title}
                  <p className="place">
                    <a href="/" className="text-dark">
                      <strong>{experience.company}</strong>
                    </a>
                  </p>
                  <p className="year">({experience.duration})</p>
                </h3>
                <p>{experience.description}</p>
                <p>Reference: {experience.reference}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
