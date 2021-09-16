import * as React from "react";
import "./global.less";

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
      <div className="root">
        <title>Aylin Marie - Portfolio</title>
        <h1 className="h2">Aylin Marie</h1>
        <section>
          <h2 className="h1">UX engineer empowering teams with design systems</h2>
          <p>Based in Atlanta and building at <a href="https://www.mailchimp.com" target="_blank">Mailchimp</a>. Formerly <a href="http://banyancom.com" target="_blank">Banyan</a>.</p>
        </section>
        
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
    </div>
  )
}

export default IndexPage
