import * as React from "react";
import "../../global.less";

import About from "./About.js";
import Work from "./Work.js";
import Projects from "./Projects.js";

const App = () => {
  const LINKS = [
    {
      name: "hello@aylinmarie.co",
      url: "mailto:hello@aylinmarie.co",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aylinmcginnis/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aylin_marie",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aylinmcg",
    },
    {
      name: "CodePen",
      url: "https://codepen.io/aylinmarie",
    },
  ];

  return (
    <>
      <main className="root">
        <section>
          <h1 className="title">
            <a href="/">Aylin Marie</a>
          </h1>
          <h2 className="h1">
            front end engineer empowering teams with thoughtful design systems
            while specializing in accessibility
          </h2>
          <p>
            Based in Atlanta and building at{" "}
            <a
              href="https://www.mailchimp.com"
              target="_blank"
              rel="noreferrer"
            >
              Mailchimp
            </a>
            . Formerly{" "}
            <a href="http://banyancom.com" target="_blank" rel="noreferrer">
              Banyan
            </a>
            .
          </p>
        </section>

        <About />
        <Work />
        <Projects />
      </main>
      <footer>
        <ul>
          {LINKS.map((link) => {
            return (
              <li key={link.name}>
                <a href={link.url}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <span>
          Built with{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </span>
      </footer>
    </>
  );
};

export default App;
