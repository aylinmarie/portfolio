import * as React from "react";
import * as stylesheet from "./Projects.module.less";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {

  return (
      <section className="grid">
        <div>
          <h2 className="line">Projects</h2>
        </div>
        <div className={stylesheet.gallery}>
            <a href="https://aylin-marie.netlify.app/" target="_blank">
                <StaticImage 
                    src="../images/sample_portfolio.png" 
                    width={300} 
                    height={300} 
                    alt="Early iteration of my portfolio website built in Gatsby and designed in Figma." />
            </a>
            <a href="https://blackartisans.netlify.app/" target="_blank">
                <StaticImage 
                    src="../images/black_artisans.png" 
                    width={300} 
                    height={300} 
                    alt="Project titled Black Artisans featuring black craftspeople around the world." />
            </a>
        </div>
      </section>
  )
}

export default Projects
