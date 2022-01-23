import * as React from "react";
import * as stylesheet from "./projects.module.less";

import { Link } from "gatsby";

import baImg from "../../images/black_artisans.png";
import portfolioImg from "../../images/sample_portfolio.png";
import knitImg from "../../images/elegant_knit.png";
import dataVizImg from "../../images/dataviz.png";

const Projects = () => {
  const PROJECT_ITEMS = [
    {
      name: "Black Artisans",
      link: "https://blackartisans.netlify.app/",
      img: baImg,
      description:
        "Project titled Black Artisans featuring black craftspeople around the world.",
      external: true,
    },
    {
      name: "Elegant Knit",
      link: "https://www.elegantknit.co",
      img: knitImg,
      description:
        "Project titled Elegant knits sharing my favorite modern knitting patterns.",
      external: true,
    },
    {
      name: "Sample Portfolio",
      link: "https://aylin-project-portfolio.netlify.app/",
      img: portfolioImg,
      description:
        "Early iteration of my portfolio website built in Gatsby and designed in Figma.",
      external: true,
    },
    {
      name: "Mailchimp Data Visualization",
      link: "/mailchimp/dataviz",
      img: dataVizImg,
      description: "Refresh of Mailchimp's data visualization.",
      external: false,
    },
  ];

  return (
    <section className="grid">
      <div>
        <h2 className="h2Line">Projects</h2> <span className="line" />
      </div>
      <div className={stylesheet.gallery}>
        {PROJECT_ITEMS.map((item) => {
          return item.external ? (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.img}
                width={300}
                height={300}
                alt={item.description}
              />
            </a>
          ) : (
            <Link key={item.name} to={item.link}>
              <img
                src={item.img}
                width={300}
                height={300}
                alt={item.description}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
