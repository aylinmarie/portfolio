import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { ExternalLink } from "@components";

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

  const EDGES = data.allContentfulProject.edges;

  return (
    <section className="grid">
      <div>
        <h2 className="h2Line">Projects</h2> <span className="line" />
      </div>
      <div className={stylesheet.gallery}>
        {EDGES.map((item) => {
          return item.node.path.indexOf("http") ? (
            <Link key={item.node.title} to={item.node.path}>
              <img
                src={item.node.previewImage.url}
                alt={item.node.previewImage.title}
              />
            </Link>
          ) : (
            <ExternalLink key={item.node.title} href={item.node.path}>
              <img
                src={item.node.previewImage.url}
                alt={item.node.previewImage.title}
              />
            </ExternalLink>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
