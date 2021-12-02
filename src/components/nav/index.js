import React from "react"
import "./styles.scss"
import Link from "./link"
import ImageLink from "./imgLink"
import { StaticImage } from "gatsby-plugin-image"

function Nav() {
  return (
    <div className="nav">
      <ImageLink
        href="home"
        img={
          <StaticImage
            src="../../../static/static_logo.png"
            className="nav-logo"
            alt="main logo"
            backgroundColor="transparent"
            placeholder="none"
          />
        }
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
