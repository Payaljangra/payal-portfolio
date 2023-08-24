import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h2>The profile that i'm interested in</h2>
      {/* <h2>Look</h2> */}

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front End Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Programming languages: HTML, CSS, JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end libraries and frameworks: React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control: Git</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design and mobile-first development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web performance optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX design principles</p>
            </li>
          </ul>
        </article>

        {/* full stack ************/}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end technologies: HTML, CSS, JavaScript, React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end programming languages: Java, Node.js,PHP</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end frameworks: Laravel</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database management: MySQL, PostgreSQL,MongoDB
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design and mobile-first development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control: Git</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem , ipsum dolor sit amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>

        {/* Android developer */}

        <article className="service">
          <div className="service__head">
            <h3>Android App Developement</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Programming languages: Kotlin</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Android development tools: Android Studio,Gradle</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX design principles:Material Desing, Responsive layouts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MySQL or other backend-as-a-service platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control:Git</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>performance optimization and memory management</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem , ipsum dolor sit amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
