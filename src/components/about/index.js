import React from "react"
import "./styles.scss"
import { StaticImage } from "gatsby-plugin-image"
import MyReactLogo from "../../../static/tech/react_logo.svg"
import TypeScriptLogo from "../../../static/tech/typescript_logo.svg"
import SassLogo from "../../../static/tech/sass_logo.svg"
import NextLogo from "../../../static/tech/next_logo.svg"

function About() {
  return (
    <div className="about" id="about">
      <h1 className="title">about_</h1>
      <div className="content-row">
        <StaticImage
          src="../../../static/rodrigo.jpg"
          alt="rodrigo ramirez"
          className="image"
          placeholder="blurred"
        />
        <div className="text-container">
          <div className="bg-text-container">
            <p className="bg-text">Innovative</p>
            <p className="bg-text">Software</p>
          </div>
          <p className="text">
            Hello! my name is <b className="accent-text">Rodrigo</b>, and I'm a
            passionate software developer from Peru. I started programming at 16
            years old, creating very simple websites and games.
          </p>
        </div>
      </div>
      <div className="secondary-row">
        <p className="phrase">
          "Desire for building creative and innovative software"
        </p>
        <div className="tech-row">
          <p className="favs-title">my favs:</p>
          <div className="logos-row">
            <MyReactLogo className="logo" />
            <TypeScriptLogo className="logo" />
            <SassLogo className="logo" />
            <NextLogo className="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
