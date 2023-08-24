import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
// import Me from "../../Images/formal_pic.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>3+ Years </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Student</h5>
              <small>4th Year</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <p>
            As a full stack web developer student, have experience in building
            and deploying web applications, working with databases like MySQL
            and poses strong communication, organization, diagnostic and
            analytical skills. Always excited to leverage my skills and
            knowledge to contribute to a dynamic and innovative team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
