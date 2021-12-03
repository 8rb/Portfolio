import React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Home from "../components/home"
import Nav from "../components/nav"
import Projects from "../components/projects"
import { Helmet } from "react-helmet"

export default function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rodrigo Ramirez · Web Developer Portfolio</title>
        <meta name="theme-color" content="#16ffd8" />
        <link rel="canonical" href="https://rodrigoramirez.dev" />
        <meta property="og:title" content="Web Development Portfolio" />
        <meta property="og:url" content="https://rodrigoramirez.dev" />
        <meta property="og:image" content="/static_logo.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Front End Development portfolio of Rodrigo Ramirez"
        />
        <meta
          name="description"
          content="Web Development Portfolio of Rodrigo Ramirez. Front End Developer specialized in Single Page Application technologies such as: React and Vue."
        />
      </Helmet>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
