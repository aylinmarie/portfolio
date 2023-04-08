import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { ExternalLink } from "@components";
import PROJECT_ITEMS from "../data/work.js";

import * as stylesheet from "./projects.module.scss";

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query MyProjectQuery {
        allContentfulProject {
          edges {
            node {
              id
              title
              path
              previewImage {
                title
                url
              }
            }
          }
        }
      }
    `
  );

  const edge = data.allContentfulProject.edges;

  return (
    <section className="grid">
      <div>
        <h2 className="h2Line">Projects</h2> <span className="line" />
      </div>
      <div className={stylesheet.gallery}>
        {PROJECT_ITEMS.map((item) => {
          return item.external ? (
            <ExternalLink key={item.name} href={item.link}>
              <img src={item.img} alt={item.description} />
            </ExternalLink>
          ) : (
            <Link key={item.name} to={item.link}>
              <img src={item.img} alt={item.description} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
