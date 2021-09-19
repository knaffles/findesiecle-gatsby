import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const Products = ({ data }) => {
  const { edges: products } = data.allMarkdownRemark;

  return (
    <div className="products">
      {products &&
        products.map(({ node: product }) => (
          <article className="product" key={product.id}>
            {product.frontmatter.featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: product.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${product.frontmatter.title}`,
                  }}
                />
              </div>
            ) : null}
            <div>
              <p>Artist: {product.frontmatter.artist}</p>
              <p>
                Description: {product.frontmatter.description}
                {/* <br />
                  <br />
                  <Link className="button" to={product.fields.slug}>
                    Keep Reading →
                  </Link> */}
              </p>
              <p>Dimensions: {product.frontmatter.dimensions}</p>
              <p>Reference: {product.frontmatter.reference}</p>
              <p>Condition: {product.frontmatter.condition}</p>
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
                sold
                featuredimage {
                  childImageSharp {
                    fixed(width: 400, height: 400) {
                      ...GatsbyImageSharpFixed
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
