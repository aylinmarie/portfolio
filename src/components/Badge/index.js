import * as React from "react";
import PropTypes from "prop-types";

import * as stylesheet from "./Badge.module.less";

const Badge = ({ children }) => {
  return <span className={stylesheet.root}>{children}</span>;
};

Badge.propTypes = {
  children: PropTypes.node,
};

export default Badge;
