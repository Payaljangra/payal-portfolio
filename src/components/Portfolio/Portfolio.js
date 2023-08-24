import React from "react";
import './portfolio.css'

import Products from "./Products";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {Products.map((item) => {
          return(
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={require(`${__dirname}/../../assets/${item.image}`)} alt="" />
             
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cts">
              <a href={item.github} className="btn">
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
