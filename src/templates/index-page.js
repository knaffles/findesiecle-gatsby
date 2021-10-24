import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Products from "../components/Products";
// import Carousel from "../components/Carousel";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <section className="home-hero">
        <div className="row">
          <div className="home-hero-container">
            <div className="home-image">
              <PreviewCompatibleImage
                imageInfo={{
                  image: frontmatter.image,
                  alt: "Image of product offered by Fin de Siecle.",
                }}
              />
            </div>
            <div className="home-text">
              <h1>{frontmatter.heading}</h1>
              <div dangerouslySetInnerHTML={{ __html: html }} />;
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <h2>Available for Purchase</h2>
          <Products />
        </div>
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
      }
    }
  }
`;
