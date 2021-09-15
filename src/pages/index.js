import * as React from "react";
import * as stylesheet from "./Home.module.less";

import About from './About.js';

const IndexPage = () => {

  const LINKS = [
    {
      name: "Email",
      url: "mailto:aylin.mcginnis@gmail.com"
    },
    {
      name: "CodePen",
      url: "https://codepen.io/aylinmarie"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aylin_marie"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aylinmcg"
    },
  ]

  return (
      <React.Fragment>
        <title>Aylin Marie - Portfolio</title>
        <h1>Aylin Marie</h1>
        <h2>UX engineer empowering teams with design systems</h2>
        <p>Based in Atlanta and building at <a href="https://www.mailchimp.com" target="_blank">Mailchimp</a>. Formerly <a href="http://banyancom.com" target="_blank">Banyan</a>.</p>

        <About/>
      <footer>
        <ul>
          {LINKS.map(link => {
            return (
              <li key={link.name}><a href={link.url}>{link.name}</a></li>
            );
          })}
        </ul>
      </footer>
    </React.Fragment>
  )
}

export default IndexPage
