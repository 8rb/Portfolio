import React from "react"
import "./styles.scss"
import Link from "./link"
import ImageLink from "./imgLink"
import Sphere from "../../pages/sphere"

function Nav() {
  return (
    <div className="nav">
      <ImageLink href="home" img={<Sphere className="brand-sphere" />} />
      <div className="links">
        <Link href="main-projects" name="projects" />
        <Link href="about" name="about" />
        <Link href="contact" name="contact" />
      </div>
    </div>
  )
}

export default Nav
