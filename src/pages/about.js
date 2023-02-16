import * as React from "react";

import { ExternalLink } from "@components";

const About = () => {
  return (
    <section className="grid">
      <div>
        <h2 className="h2Line">Merhaba!</h2> <span className="line" />
      </div>
      <div>
        <p>
          In 2017, I quit my job (after a year of self-teaching) and jumped into
          an immersive web development program at{" "}
          <ExternalLink href="https://generalassemb.ly/">
            General Assembly
          </ExternalLink>{" "}
          to become a web developer.
        </p>

        <p>
          I landed my first role as a front end developer at a{" "}
          <ExternalLink href="http://banyancom.com/">
            creative agency
          </ExternalLink>{" "}
          that focuses on social good companies in Atlanta. On the side, I
          continued to work with entrepreneurs launch their digital presence on
          various platforms. There is nothing more exciting than watching people
          make their brand or project come to life. I know what it feels like to
          build and grow in a place of passion.
        </p>

        <p>
          As I started developing more knowledge in my craft, I found a role
          that combined my love for both design and engineering. I now work on
          building a design system for Mailchimp as a UX Engineer.
        </p>

        <p>
          If I am not digging into code or designing for the web, you can find
          me knitting a new sweater or traveling to the other side of the world.
        </p>
      </div>
    </section>
  );
};

export default About;
