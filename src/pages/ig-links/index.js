import * as React from "react";
import { graphql } from "gatsby";

import { Layout, ExternalLink } from "@components";

const IGLinks = ({ data }) => {
  const LINKS = data.allPrismicIgLinks.nodes;

  return (
    <Layout>
      <section className="grid">
        <div>
          <h1 className="h2 h2Line">Links</h1> <span className="line" />
        </div>
        <div>
          <ul>
            {LINKS.map((link) => {
              return (
                <li key={link.data.title.text}>
                  <ExternalLink href={link.data.link.url}>
                    {link.data.title.text}
                  </ExternalLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IGLinks;

export const query = graphql`
  query MyQuery {
    allPrismicIgLinks {
      nodes {
        data {
          link {
            url
          }
          title {
            text
          }
        }
      }
    }
  }
`;
