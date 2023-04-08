/* eslint-disable react/prop-types */
import * as React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

import { Layout } from "@components";

export const query = graphql`
  query ($slug: String!) {
    contentfulProject(path: { eq: $slug }) {
      title
      richText {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;

const ProjectPost = (props) => {
  const { title, richText } = props.data.contentfulProject;

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { gatsbyImageData, title } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return <GatsbyImage image={gatsbyImageData} alt={title} />;
      },
    },
  };

  return (
    <Layout>
      <section className="grid">
        <div>
          <h1 className="h2 h2Line">{title}</h1>
          <span className="line" />
        </div>
        <div>{richText && renderRichText(richText, options)}</div>
      </section>
    </Layout>
  );
};

export default ProjectPost;
