import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { MARKS } from "@contentful/rich-text-types";

import { ExternalLink } from "@components";

import Projects from "./projects.js";

import "../styles/global.scss";
import * as stylesheet from "./app.module.scss";
import * as badgeStyle from "../components/Badge/Badge.module.scss";

const App = () => {
  // Contentful data
  const data = useStaticQuery(
    graphql`
      query MyWorkQuery {
        allContentfulPortfolioSection {
          edges {
            node {
              title
              body {
                raw
              }
            }
          }
        }
      }
    `
  );

  const DATA = data.allContentfulPortfolioSection.edges;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className={badgeStyle.root}>{text}</b>,
    },
  };

  // Sort data title in alphabetical order
  function compare(a, b) {
    if (a.node.title < b.node.title) {
      return -1;
    }
    if (a.node.title > b.node.title) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <section className={stylesheet.intro}>
        <h1 className="title">
          <a href="/">Aylin Marie</a>
        </h1>
        <h2 className="h1">
          front end engineer empowering teams with thoughtful design systems
          while specializing in accessibility
        </h2>
        <p>
          Based in Atlanta and building at{" "}
          <ExternalLink href="https://www.mailchimp.com">
            Mailchimp
          </ExternalLink>
          . Formerly{" "}
          <ExternalLink href="http://banyancom.com">Banyan</ExternalLink>.
        </p>
      </section>

      {/* Section Content */}
      {DATA.sort(compare).map((content) => {
        const { title, body } = content.node;

        return (
          <section className="grid" key={title}>
            <div>
              <h2 className="h2Line">{title}</h2> <span className="line" />
            </div>
            <div>{body && renderRichText(body, options)}</div>
          </section>
        );
      })}

      {/* Personal Projects */}
      <Projects />
    </>
  );
};

export default App;
