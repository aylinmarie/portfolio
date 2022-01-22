import * as React from "react";
import Nav from "../../components/Nav/";

import colorCombo from "./images/colorCombo.png";

const About = () => {
  return (
    <>
      <Nav />
      <section className="grid">
        <div>
          <h2 className="h2Line">Mailchimp Data Visualization</h2>{" "}
          <span className="line" />
        </div>
        <div>
          <div>
            <p>
              One of my first projects at Mailchimp was to help redefine our
              visual guidelines for how we present data. I worked with our
              design system Product Designer and infrastructure Staff Engineer
              to reevaluate color combinations for accessibility and refactoring
              foundational charts from Dojo to React D3.
            </p>

            <p>
              <a
                href="https://ux.mailchimp.com/product/patterns/data"
                target="_blank"
                rel="noreferrer"
              >
                Mailchimp's data visualization guidelines
              </a>
              .
            </p>
          </div>
          <section>
            <h3>Defining Color Combinations</h3>
            <p>
              We did not have design guidelines on how to use colors within our
              charts. Color combination decisions were typically left up to the
              product team. With the large selection of colors in our brand
              palette, this introduced issues that would easily make our
              visualizations inaccessible to users with color blindness or
              low-vision.
            </p>
            <p>For this deliverable, our goals were to:</p>
            <ul>
              <li>
                Provide a number of color combinations with appropriate color
                contrast.
              </li>
              <li>
                Make the combination of colors constrained in code using css
                variables.
              </li>
            </ul>

            <img src={colorCombo} />
          </section>
          <div>
            <h3>Refactoring to React D3</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
