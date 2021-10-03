import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Products from "../components/Products";
// import Carousel from "../components/Carousel";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
              <h1>About Fin-De-Siècle</h1>
              <p>
                Based north of Chicago, Fin-De-Siècle specializes in late-19th
                and early-20th century decorative arts. If you would like to
                know more about what we offer, please contact us using the form
                below.
              </p>
            </div>
          </div>
        </div>

        {/* <button id="show-descr">Show descriptions</button> */}
        {/* <Carousel /> */}
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
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
