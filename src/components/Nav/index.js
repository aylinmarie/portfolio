import * as React from "react";
import { Link } from "react-router-dom";

import * as stylesheet from "./Nav.module.less";

const Nav = () => {
  return (
    <nav className={stylesheet.root}>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Nav;
