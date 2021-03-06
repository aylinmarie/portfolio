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
          In 2017, I felt it was time to shift gears and start figuring out what
          it means to “love what you do”. I quit my job (after a year of
          self-teaching) and jumped into an immersive web development program at{" "}
          <ExternalLink href="https://generalassemb.ly/">
            General Assembly
          </ExternalLink>
          .
        </p>

        <p>
          I landed my first role as a front end developer for a{" "}
          <ExternalLink href="http://banyancom.com/">
            creative agency
          </ExternalLink>{" "}
          that focuses on social good companies in Atlanta. On the side, I use
          to work with entrepreneurs to help launch their digital presence on
          different platforms. There is nothing more exciting than watching
          people make their brand or project come to life. I know what it feels
          like to build and grow in a place of passion, and I know what it feels
          like when you’ve accomplished it!
        </p>

        <p>
          As I started developing more knowledge in my craft, I found a role
          that combined my love for both design and engineering. I now work on
          building a design system for Mailchimp as a UX Engineer.
        </p>

        <p>
          If I am not digging into code or pairing fonts, you can probably find
          me on the other side of the hemisphere :)
        </p>
      </div>
    </section>
  );
};

export default About;
