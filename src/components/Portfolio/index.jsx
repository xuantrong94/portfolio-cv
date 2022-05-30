import React from "react";

import IMG1 from "../../assets/images/project-1.png";
import IMG2 from "../../assets/images/project-2.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG1} alt="" />{" "}
          </div>
          <h3>Ecommerce</h3>
          <a
            href="https://github.com/xuantrong94/ecommerce"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG2} alt="" />{" "}
          </div>
          <h3>Booking Hotel</h3>
          <a
            href="https://github.com/xuantrong94/beach-hotel"
            className="btn"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
