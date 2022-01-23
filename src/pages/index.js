import * as React from "react";
import "../../global.less";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import favicon from "../images/favicon.ico";
import App from "./App.js";
import Footer from "../components/Footer";

ReactGA.initialize("UA-66263407-1");
try {
  ReactGA.pageview(window.location.pathname + window.location.search);
} catch (e) {
  console.log(e);
}

const IndexPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <link rel="icon" href={favicon} />
        <title>Aylin Marie - Portfolio</title>
      </Helmet>
      <main className="root">
        <App />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
