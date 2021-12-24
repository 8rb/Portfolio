import React, { useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import MyReactLogo from "../../../static/tech/react_logo.svg"
import TypeScriptLogo from "../../../static/tech/typescript_logo.svg"
import SassLogo from "../../../static/tech/sass_logo.svg"
import NextLogo from "../../../static/tech/next_logo.svg"
import "./styles.scss"

const AboutModule = () => {
  const constraintsRef = useRef(null)

  return (
    <section className="about" id="about" ref={constraintsRef}>
      <h1 className="section-title glowing-text mb-5">About Me</h1>
      <div className="content-row">
        <StaticImage
          src="../../../static/rodrigo.jpg"
          alt="rodrigo ramirez"
          className="image"
          placeholder="blurred"
        />
        <div className="text-container">
          <p className="text">
            Hello! my name is{" "}
            <b className="accent-text glowing-text">Rodrigo</b>, and I'm a
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
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <MyReactLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <TypeScriptLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <SassLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <NextLogo className="logo" />
            </motion.div>
          </div>
          <p className="instruction-text">(you can drag them)</p>
        </div>
      </div>
    </section>
  )
}

export default AboutModule
