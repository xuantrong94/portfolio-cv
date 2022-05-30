import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/images/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__img">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Self Study</h5>
              <small>1+ Year Self-study</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            I am interested in IT and everything in its
            orbit. I recently began to be fascinated by web
            programming, e.g. developing apps and building
            websites. I completed courses on
            freecodecamp.org and w3school.com. I've
            completed a few personal projects on my own.
          </p>
          <p>
            As this area complements my studies, I am keen
            to gain more experience in the field. For this
            reason, I am looking for a company willing to
            offer me a placement among their developers. In
            return, I would offer my full commitment, and be
            a pleasant and friendly addition to your team.
          </p>
          <p>
            I am therefor currently looking for a job or and
            internship as a frond-end developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
