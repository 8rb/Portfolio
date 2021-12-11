import React from "react"
import { Link as LinkScroll } from "react-scroll"

function ImageLink({ href, img }) {
  return (
    <LinkScroll
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
      className="img-link"
    >
      {img}
    </LinkScroll>
  )
}

export default ImageLink
