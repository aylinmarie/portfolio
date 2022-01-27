import * as React from "react";
import "../../global.less";
import * as stylesheet from "./app.module.less";

import { ExternalLink } from "@components";

import About from "./about.js";
import Work from "./work.js";
import Projects from "./projects.js";

const App = () => {
  return (
    <>
      <section className={stylesheet.intro}>
        <h1 className="title">
          <a href="/">Aylin Marie</a>
        </h1>
        <h2 className="h1">
          front end engineer empowering teams with thoughtful design systems
          while specializing in accessibility
        </h2>
        <p>
          Based in Atlanta and building at{" "}
          <ExternalLink href="https://www.mailchimp.com">
            Mailchimp
          </ExternalLink>
          . Formerly{" "}
          <ExternalLink href="http://banyancom.com">Banyan</ExternalLink>.
        </p>
      </section>

      <About />
      <Work />
      <Projects />
    </>
  );
};

export default App;
