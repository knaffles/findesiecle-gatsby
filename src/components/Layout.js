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
          content="Based north of Chicago, Fin-De-Siècle specializes in late-19th and early-20th century decorative arts. If you would like to know more about what we offer, please contact us using the form below."
        />
        <link rel="shortcut icon" href={`${withPrefix("/")}img/favicon.ico`} />
        <title>Fin De Siecle</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default TemplateWrapper;
