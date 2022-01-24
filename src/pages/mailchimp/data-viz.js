import * as React from "react";
import colorCombo from "../../images/colorCombo.png";
import dataViz from "../../images/dataviz.png";

import { ExternalLink, Layout } from "@components";

const DataViz = () => {
  return (
    <Layout>
      <section className="grid">
        <div>
          <h1 className="h2 h2Line">Mailchimp Data Visualization</h1>{" "}
          <span className="line" />
        </div>
        <div>
          <div>
            <p>
              One of my first projects at Mailchimp was to help redefine our
              visual guidelines for how we present data. I worked with our
              design system Product Designer and infrastructure Staff Engineer.
            </p>
            <p>For this deliverable, our goals were to:</p>
            <ol>
              <li>
                Provide a number of color combinations with appropriate color
                contrast (in both Figma and code).
              </li>
              <li>
                Publish first phase of our refactored charts from Dojo to{" "}
                <ExternalLink href="https://react-d3-library.github.io/">
                  React D3
                </ExternalLink>
                .
              </li>
            </ol>
          </div>
          <section>
            <h2 className="h3">Defining Color Combinations</h2>
            <img
              alt="Six combinations of colors for proper visual contrast used in Mailchimp charts."
              src={colorCombo}
            />
            <p>
              We did not have design guidelines on using color within our
              charts. Color combination decisions were typically left up to
              product teams. With our large selection of brand colors, this
              introduced potential issues that could make our visualizations
              inaccessible to users with color blindness or low-vision.
            </p>

            <p>
              At the time of the project, we still had various way to implement
              charts in the codebase so we made the color combinations
              accessible through 1) Less tokens and 2) class names. Our tokens
              were combination names set up as an array of values. We then took
              those tokens and created a{" "}
              <ExternalLink href="https://lesscss.org/features/#mixins-feature-loops-feature">
                recursive mixin
              </ExternalLink>{" "}
              to generate the CSS class names.
            </p>
          </section>
          <section>
            <h2 className="h3">Refactoring to React D3</h2>
            <img
              alt="Line charts using new color combination palettes."
              src={dataViz}
            />
            <p>
              Our charting system was originally built in Dojo mixed with
              various charting libraries. This project was the first phase of
              refactoring charts from Dojo to{" "}
              <ExternalLink href="https://react-d3-library.github.io/">
                React D3
              </ExternalLink>
              .
            </p>

            <p>
              <ExternalLink href="https://ux.mailchimp.com/product/patterns/data">
                Mailchimp's data visualization guidelines
              </ExternalLink>
              .
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default DataViz;
