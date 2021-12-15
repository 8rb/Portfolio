import React from "react"
import "./styles.scss"
import { Link } from "gatsby"
import Sphere from "../../pages/sphere"

function NavProjects() {
  return (
    <div className="nav-projects">
      <Link activeclass="active" to="/" className="img-link">
        <Sphere className="brand-sphere" />
      </Link>
      <div className="links">
        <Link to="/">back to home</Link>
      </div>
    </div>
  )
}

export default NavProjects
