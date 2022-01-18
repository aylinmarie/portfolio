import * as React from "react";
import * as stylesheet from "./Projects.module.less";

import baImg from '../images/black_artisans.png';
import portfolioImg from'../images/sample_portfolio.png';
import knitImg from'../images/elegant_knit.png';


const Projects = () => {

  const PROJECT_ITEMS = [
    {
      name: 'Black Artisans',
      link: 'https://blackartisans.netlify.app/',
      img: baImg,
      description: 'Project titled Black Artisans featuring black craftspeople around the world.'
    },
    {
      name: 'Elegant Knit',
      link: 'https://www.elegantknit.co',
      img: knitImg,
      description: 'Project titled Elegant knits sharing my favorite modern knitting patterns.'
    },
    {
      name: 'Sample Portfolio',
      link: 'https://aylin-project-portfolio.netlify.app/',
      img: portfolioImg,
      description: 'Early iteration of my portfolio website built in Gatsby and designed in Figma.'
    }
  ]

  return (
      <section className="grid">
        <div>
          <h2 className="line">Projects</h2>
        </div>
        <div className={stylesheet.gallery}>
          {PROJECT_ITEMS.map(item => {
            return (
              <a key={item.name} href={item.link} target="_blank">
                <img 
                    src={item.img} 
                    width={300} 
                    height={300} 
                    alt={item.description} />
            </a>
            )
          })}
        </div>
      </section>
  )
}

export default Projects
