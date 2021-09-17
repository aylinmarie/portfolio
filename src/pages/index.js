import * as React from "react";
import "./global.less";
import { Helmet } from "react-helmet"

import About from './About.js';
import Work from './Work.js';


const IndexPage = () => {

  const LINKS = [
    {
      name: "Email",
      url: "mailto:aylin.mcginnis@gmail.com"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aylinmcginnis/"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aylin_marie"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aylinmcg"
    },
    {
      name: "CodePen",
      url: "https://codepen.io/aylinmarie"
    }
  ]

  return (
    <>
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
          <title>Aylin Marie - Portfolio</title>
      </Helmet>
      <main className="root">
        <h1 className="h2"><a href="/">Aylin Marie</a></h1>
        <section>
          <h2 className="h1">front end engineer empowering teams with thoughtful design systems while specializing in accessibility</h2>
          <p>Based in Atlanta and building at <a href="https://www.mailchimp.com" target="_blank">Mailchimp</a>. Formerly <a href="http://banyancom.com" target="_blank">Banyan</a>.</p>
        </section>
        
        <About/>
        <Work/>
    </main>
    <footer>
    <ul>
      {LINKS.map(link => {
        return (
          <li key={link.name}><a href={link.url}>{link.name}</a></li>
        );
      })}
    </ul>
    <span>Built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatbsy</a></span>
  </footer>
  </>
  )
}

export default IndexPage
