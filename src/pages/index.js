import React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Home from "../components/home"
import Nav from "../components/nav"
import Projects from "../components/projects"

export default function HomePage() {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
