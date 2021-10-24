import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { withPrefix } from "gatsby";
import "../scss/styles.scss";

const TemplateWrapper = ({ children }) => {
  // const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content="Based north of Chicago, Fin-De-Siècle specializes in late-19th and early-20th century decorative arts."
        />
        <link rel="shortcut icon" href={`${withPrefix("/")}img/favicon.ico`} />
        <title>Fin De Siècle</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <div className="footer">
        <div className="row">
          &copy; {new Date().getFullYear()} Fin-De-Siècle
        </div>
      </div>
    </div>
  );
};

export default TemplateWrapper;
