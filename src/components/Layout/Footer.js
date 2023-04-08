import * as React from "react";

import ExternalLink from "../ExternalLink";

import * as stylesheet from "./Footer.module.scss";

export default function Footer() {
  const LINKS = [
    {
      name: "Email",
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
      name: "GitHub",
      url: "https://github.com/aylinmarie",
    },
  ];

  return (
    <footer className={stylesheet.root}>
      <div>
        <h2 className="h3">Let's Connect</h2>
        <ul>
          {LINKS.map((link) => {
            return (
              <li key={link.name}>
                <ExternalLink href={link.url}>{link.name}</ExternalLink>
              </li>
            );
          })}
        </ul>
      </div>

      <span>
        Built with{" "}
        <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink> +{" "}
        <ExternalLink href="https://www.contentful.com/">
          Contentful
        </ExternalLink>
      </span>
    </footer>
  );
}
