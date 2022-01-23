import * as React from "react";
import "../../global.less";
import * as stylesheet from "./App.module.less";

import About from "./About.js";
import Work from "./Work/index.js";
import Projects from "./Project/index.js";

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
          <a href="https://www.mailchimp.com" target="_blank" rel="noreferrer">
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
    </>
  );
};

export default App;
