import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { ExternalLink } from "@components";

import * as stylesheet from "./projects.module.scss";

const Projects = () => {
  // Contentful data
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
          const { title, path, previewImage } = item.node;

          return path.indexOf("http") ? (
            // Internal Links
            <Link key={title} to={`/projects/${path}`}>
              <img src={previewImage.url} alt={previewImage.title} />
            </Link>
          ) : (
            // External Links
            <ExternalLink key={title} href={path}>
              <img src={previewImage.url} alt={previewImage.title} />
            </ExternalLink>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
