import * as React from "react";
import PropTypes from "prop-types";

import * as stylesheet from "./Badge.module.scss";

const Badge = ({ children }) => {
  return <span className={stylesheet.root}>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.node,
};

export default Badge;
