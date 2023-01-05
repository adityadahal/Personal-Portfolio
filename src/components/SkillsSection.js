import React from "react";
import { profile } from "../data/profile";

function SkillsSection() {
  return (
    <aside className="skills aside section">
      <div className="section-inner shadow-sm rounded">
        <h2 className="heading">Skills</h2>
        <div className="content">
          <p className="intro">{profile.skillInfo}</p>

          <div className="skillset">
            {profile.skills
              .sort((skillA, skillB) => skillB.level - skillA.level)
              .map((skill, index) => {
                return (
                  <div className="item">
                    <h3 className="level-title">
                      {skill.name}
                      {/* <span className='level-label'>{skill.level}%</span> */}
                    </h3>

                    {/* <div className="level-bar progress"> */}
                    {/* <div
                        className="progress-bar level-bar-inner"
                        role="progressbar"
                        style={{ width: skill.percentage }}
                        aria-valuenow={skill.level}
                        aria-valuemin={skill.level}
                        aria-valuemax={skill.level}
                      ></div> */}
                    {/* </div> */}
                  </div>
                );
              })}

            <p>
              <a
                className="more-link"
                href="https://www.github.com/adityadahal"
              >
                <i className="fas fa-external-link-alt"></i>More on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SkillsSection;
