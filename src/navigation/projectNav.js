import React from "react"
import { Link } from "gatsby"
import Sphere from "../components/sphere"
import "./styles.scss"

const ProjectNav = () => {
  return (
    <nav className="nav">
      <Link activeclass="active" to="/" className="img-link">
        <Sphere className="brand-sphere" />
      </Link>
      <div className="links">
        <Link className="navigation-link" to="/projects">
          All Projects
        </Link>
        <Link className="navigation-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectNav
