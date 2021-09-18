import * as React from "react";
import * as stylesheet from './Badge.module.less'

const Badge = ({children}) => {

  return (
      <span className={stylesheet.root}>{children}</span>
  )
}

export default Badge
