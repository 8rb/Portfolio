import React from "react"
import { Link as LinkScroll } from "react-scroll"

function Link({ href, name }) {
  return (
    <LinkScroll
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {name}
    </LinkScroll>
  )
}

export default Link
