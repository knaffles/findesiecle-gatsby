import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Slider from "react-slick";

import pic1 from "../img/slider/pic1.jpg";
import pic2 from "../img/slider/pic2.jpg";
import pic3 from "../img/slider/pic3.jpg";
import pic4 from "../img/slider/pic4.jpg";
import pic5 from "../img/slider/pic5.jpg";
import pic6 from "../img/slider/pic6.jpg";
import pic7 from "../img/slider/pic7.jpg";
import pic8 from "../img/slider/pic8.jpg";
import pic9 from "../img/slider/pic9.jpg";
import pic10 from "../img/slider/pic10.jpg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <section id="start">
        <button id="show-descr">Show descriptions</button>

        <Slider className="carousel" {...settings}>
          <div>
            <img alt="Image of item for sale" src={pic10} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                William Moorcroft
              </p>
              <p>
                <strong>Description:</strong>
                <br />A very rare Hazledene Landscape ceramic vase made for
                Liberty & Co., circa 1903. Green facsimile signature and
                inscribed MADE FOR LIBERTY & CO.
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                5.75” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Moorcroft, Paul Atterbury, Richard Dennis and Hugh Edwards,
                Somerset, UK, 1990, p.58
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic1} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                William Moorcroft
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Macintyre Chrysanthemum pattern vase in double your form, circa
                1912. Brown facsimile signature
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                12” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Moorcroft, Paul Atterbury, Richard Dennis and Hugh Edwards,
                Somerset, UK, 1990, p.74
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic2} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Eduard Stellmacher, Riessner, Stellmacher and Kessel
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Women in Storm from the Fates series, circa 1902. Amphora Lady
                Logo, red RStK mark
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                13” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Monsters and Maidens, Collector’s Edition, Amphora Pottery,
                Byron Vreeland, p.189
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Very good, with minor restoration to the tip of the leaves
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic3} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                William Moorcroft
              </p>
              <p>
                <strong>Description:</strong>
                Floriam Ware Blue Poppy ceramic vase, circa 1899. Printed
                factory mark with green painted monogram
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                10” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Moorcroft, Paul Atterbury, Richard Dennis and Hugh Edwards,
                Somerset, UK, 1990, p.46
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic4} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Nikolaus Kannhauser, Riessner, Stellmacher and Kessel
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Amphora Portrait Vase: Allegory of Russia, circa 1900. Marked
                with red RStK
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                5.75” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Ceramics From the House of Amphora: 1890-1915, Richard L. Scott,
                2004, p.90
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Very good, with minor restoration to the tip of the leaves
              </p>
              <p>
                <span className="red hl16">
                  <strong>SOLD</strong>
                </span>
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic5} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Riessner, Stellmacher & Kessel, Amphora.
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Flying crows porcelain vase, circa 1893
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                9.75” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Ceramics From the House of Amphora: 1890-1915, Richard L. Scott,
                2004, p.69
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic6} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Amphora
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Marked with Amphora Company red RStK stamp
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                9.5” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Monsters and Maidens, Collector’s Edition, Amphora Pottery,
                Byron Vreeland, p.104
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic7} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Paul Dchsel for RStK
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Very rare fruit bat and water plant with dusk background, circa
                1901. Impressed crown and red RStK stamp
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                22.5” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Ceramics From the House of Amphora: 1890-1915, Richard L. Scott,
                2004, p.127
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Very good, minor repair to base
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic8} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Amphora
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Symbolist Flower Woman Portrait Vase, circa 1898. Marked with
                Amphora Company red RStK stamp, Amphora-TURN large heart image
                with the number 1326
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                11.75” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Monsters and Maidens, Collector’s Edition, Amphora Pottery,
                Byron Vreeland, p.105
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
          <div>
            <img alt="Image of item for sale" src={pic9} />
            <div className="descr">
              <p>
                <strong>Artist/Factory:</strong>
                <br />
                Riessner, Stellmacher & Kessel, Amphora. Designed by Paul
                Dachsel
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                Allegory of Germany porcelain vase, circa 1900. Factory mark on
                base
              </p>
              <p>
                <strong>Dimensions:</strong>
                <br />
                11” (height)
              </p>
              <p>
                <strong>Reference:</strong>
                <br />
                Ceramics From the House of Amphora: 1890-1915, Richard L. Scott,
                2004, #119; Monsters and Maidens, Collector’s Edition, Amphora
                Pottery, Byron Vreeland, p.73
              </p>
              <p>
                <strong>Condition:</strong>
                <br />
                Excellent
              </p>
            </div>
          </div>
        </Slider>
      </section>

      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}
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
            fluid(maxWidth: 2048, quality: 100) {
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
