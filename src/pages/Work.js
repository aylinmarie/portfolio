import * as React from "react";
import * as stylesheet from "./Work.module.less";

import { ExternalLink, Badge } from "@components";

const Work = () => {
  return (
    <section className="grid">
      <div>
        <h2 className="h2Line">Work</h2> <span className="line" />
      </div>
      <div>
        <div className={stylesheet.workItem}>
          <h3>Senior Front End Engineer - Design Systems</h3>
          <Badge>Mailchimp</Badge>

          <p>
            Currently building React components, creating design tokens, testing
            for accessibility and writing documentation for our pattern library.
            I work with product teams by onboarding them into our new design
            system and support them during implementation.
          </p>
        </div>

        <div className={stylesheet.workItem}>
          <h3>Web Developer</h3>
          <Badge>Banyan</Badge>

          <p>
            Front end developer who created and maintained end-to-end web
            application development using Angular and Drupal for non-profits,
            businesses, and government entities. Clients included Centers for
            Disease Control and Prevention (CDC) and American Academy of
            Pediatrics.
          </p>
        </div>

        <div className={stylesheet.workItem}>
          <h3>Independent Developer</h3>
          <Badge>Squarespace</Badge>

          <p>
            Helping small businesses and entrepreneurs has been a passion of
            mine. I helped build brands and websites exclusively on Squarespace
            for a number of clients. As an independent front end developer, I
            was also a Squarespace Circle Member growing my web design practice.
            I was featured on a{" "}
            <ExternalLink href="https://circle.squarespace.com/member-stories/aylin-marie">
              Squarespace member story
            </ExternalLink>{" "}
            sharing my journey from accounting to finding my craft in the tech
            space. I've worked with them as a 2017 Portfolio Consultant during
            the{" "}
            <ExternalLink href="https://www.a3cfestival.com/conference">
              A3C Conference
            </ExternalLink>{" "}
            and hosted{" "}
            <ExternalLink href="https://generalassemb.ly/instructors/aylin-mcginnis/15542">
              Squarespace courses at General Assembly
            </ExternalLink>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
