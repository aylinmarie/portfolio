import * as React from "react";
import "../../global.less";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import App from "./App.js";

ReactGA.initialize("UA-66263407-1");
try {
  ReactGA.pageview(window.location.pathname + window.location.search);
} catch (e) {
  console.log(e);
}

const IndexPage = () => {
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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Aylin Marie - Portfolio</title>
      </Helmet>
      <main className="root">
        <App />
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

export default IndexPage;
