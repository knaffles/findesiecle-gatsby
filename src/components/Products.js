import React from "react";
// import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Products = ({ data }) => {
  const { edges: products } = data.allMarkdownRemark;

  return (
    <div className="products">
      {products &&
        products.map(({ node: product }) => (
          <article className="product" key={product.id}>
            {product.frontmatter.featuredimage ? (
              <div className="product-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: product.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${product.frontmatter.title}`,
                  }}
                />
              </div>
            ) : null}
            <div>
              <div class="h3">Artist/Factory:</div>
              <p>{product.frontmatter.artist}</p>

              <div class="h3">Description:</div>
              <p>{product.frontmatter.description}</p>

              <div class="h3">Dimensions:</div>
              <p>{product.frontmatter.dimensions}</p>

              <div class="h3">Reference:</div>
              <p>{product.frontmatter.reference}</p>

              <div class="h3">Condition:</div>
              <p>{product.frontmatter.condition}</p>

              {product.frontmatter.checkoutlink && (
                <a
                  href={product.frontmatter.checkoutlink}
                  className="btn"
                  aria-label={`Buy ${product.frontmatter.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy
                </a>
              )}

              {product.frontmatter.sold && <p className="sold">Sold</p>}

              {!product.frontmatter.checkoutlink && !product.frontmatter.sold && (
                <p>
                  <em>Not available for purchase.</em>
                </p>
              )}
            </div>
          </article>
        ))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProductQuery {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "product" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                artist
                description
                dimensions
                reference
                condition
                checkoutlink
                sold
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Products data={data} count={count} />}
  />
);
