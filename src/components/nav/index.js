import React from "react"
import "./styles.scss"
import Link from "./link"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

function Nav() {
  return (
    <div className="nav">
      <StaticImage
        src="../../../static/static_logo.png"
        className="nav-logo"
        alt="main logo"
        backgroundColor="transparent"
        onClick={() => scrollTo("#home")}
      />
      <div className="links">
        <Link href="projects" name="projects" />
        <Link href="about" name="about" />
        <Link href="contact" name="contact" />
      </div>
    </div>
  )
}

export default Nav
