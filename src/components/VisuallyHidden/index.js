import React from "react";
import PropTypes from "prop-types";

import * as stylesheet from "./VisuallyHidden.module.scss";

const VisuallyHidden = ({ children }) => {
  return <span className={stylesheet.root}>{children}</span>;
};

VisuallyHidden.propTypes = {
  children: PropTypes.node,
};

export default VisuallyHidden;
