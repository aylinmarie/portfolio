import baImg from "@images/black_artisans.png";
import portfolioImg from "@images/sample_portfolio.png";
import knitImg from "@images/elegant_knit.png";
import dataVizImg from "@images/mailchimpdataviz.png";

export default [
  {
    name: "Black Artisans",
    link: "https://blackartisans.co/",
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
    link: "/mailchimp/data-viz",
    img: dataVizImg,
    description: "Refresh of Mailchimp's data visualization.",
    external: false,
  },
];
