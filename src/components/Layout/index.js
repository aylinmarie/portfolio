import React from "react";
import PropTypes from "prop-types";

import Footer from "./Footer";

import * as stylesheet from "./Layout.module.less";

function Layout({ children }) {
  return (
    <>
      <main className={stylesheet.root}>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
