import React from "react";
import { ArrowUp } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import * as stylesheet from "./BackToTop.module.scss";

const BackToTop = () => {
  const scrollToTop = () => {
    // window not recognized during Netlify build process
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button onClick={scrollToTop} className={stylesheet.root}>
      <ArrowUp />
      <VisuallyHidden>Back to top</VisuallyHidden>
    </button>
  );
};

export default BackToTop;
