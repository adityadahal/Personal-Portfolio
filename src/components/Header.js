import React from "react";
import ProfilePic from "../assets/images/profile/profile_pic.jpg";
import ProfilePic2 from "../assets/images/profile/profile_pic2.jpeg";
import Profilepic3 from "../assets/images/profile/profile_pic3.jpg";
import { profile } from "../data/profile";
import MyResume from "../assets/files/resume.pdf";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img
              className="profile-image img-fluid float-start rounded-circle"
              height={150}
              width={150}
              src={Profilepic3}
              alt="profile"
            />
            <div className="profile-content">
              <h1 className="name">{profile.name}</h1>
              <h2 className="desc">{profile.tagline}</h2>
              <ul className="list-inline">
                {profile.social.map((item, index) => {
                  return (
                    <li className="list-inline-item">
                      <a href={item.url}>
                        <i
                          className={`fab ${item.icon}`}
                          style={{ fontSize: 20 }}
                        ></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <a
              className="btn btn-cta-secondary me-3"
              href={MyResume}
              target="_blank"
              rel="noreferrer"
              download
            >
              <i class="fas fa-file"></i> Download Resume
            </a>

            <a
              className="btn btn-cta-primary"
              href={`mailto:${profile.contact.email}`}
            >
              <i className="fas fa-paper-plane"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
