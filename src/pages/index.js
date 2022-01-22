import * as React from "react";
import "../../global.less";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.js";
import DataViz from "./Mailchimp/DataViz";

ReactGA.initialize("UA-66263407-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>Aylin Marie - Portfolio</title>
      </Helmet>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/mailchimp-data-viz">Mailchimp Data Visualization</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<App />}>
          Home
        </Route>
        <Route path="/mailchimp-data-viz" element={<DataViz />}>
          Home
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexPage;
