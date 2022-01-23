import * as React from "react";
import PropTypes from "prop-types";

import VisuallyHidden from "../VisuallyHidden";

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
      <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
    </a>
  );
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default ExternalLink;
