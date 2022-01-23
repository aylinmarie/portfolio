import * as React from "react";

import ExternalLink from "../ExternalLink";

export default function Footer() {
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
      name: "GitHub",
      url: "https://github.com/aylinmarie",
    },
    {
      name: "CodePen",
      url: "https://codepen.io/aylinmarie",
    },
  ];
  return (
    <footer>
      <ul>
        {LINKS.map((link) => {
          return (
            <li key={link.name}>
              <ExternalLink href={link.url}>{link.name}</ExternalLink>
            </li>
          );
        })}
      </ul>
      <span>
        Built with{" "}
        <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink>
      </span>
    </footer>
  );
}
