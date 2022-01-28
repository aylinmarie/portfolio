import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import favicon from "@images/favicon.ico";
import App from "./app.js";

import { Layout, BackToTop } from "@components";

import "../styles/global.scss";

// window not recognized during Netlify build process
let _window;
try {
  _window = window;
} catch (e) {
  console.log(e);
}

ReactGA.initialize("UA-66263407-1");
_window &&
  ReactGA.pageview(_window.location.pathname + _window.location.search);

const IndexPage = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    _window &&
      _window.addEventListener("scroll", () => {
        if (_window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Aylin Marie</title>
      </Helmet>
      <Layout>
        <App />
      </Layout>
      {showButton && <BackToTop />}
    </>
  );
};

export default IndexPage;
