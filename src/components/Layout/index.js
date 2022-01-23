import React from "react";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Nav from "./Nav";

import * as stylesheet from "./Layout.module.less";

function Layout({ children }) {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const isHome = url === "/";

  return (
    <>
      {!isHome ? <Nav /> : ""}
      <main className={stylesheet.root}>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
