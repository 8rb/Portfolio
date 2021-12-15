import React from "react"
import NavProjects from "../../components/navProjects"
import { Helmet } from "react-helmet"
import ProjectTile from "../../components/projectTile"
import { bodega, pokeapp, upspell } from "../../components/projects"
import "./styles.scss"

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects · Rodrigo Ramirez · Web Developer Portfolio</title>
        <meta name="theme-color" content="#16ffd8" />
        <link rel="canonical" href="https://rodrigoramirez.dev" />
        <meta property="og:title" content="Web Development Portfolio" />
        <meta property="og:url" content="https://rodrigoramirez.dev" />
        <meta property="og:image" content="/sphere.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Front End Development portfolio of Rodrigo Ramirez"
        />
        <meta
          name="description"
          content="Projects of Rodrigo Ramirez. Front End Developer specialized in JavaScript Frameworks like React and Vue."
        />
        <meta name="image" content="/sphere.png" />
      </Helmet>
      <NavProjects />
      <div className="projects">
        <h1 className="title">All Projects</h1>
        <ProjectTile project={bodega} orientation="right" />
        <ProjectTile project={pokeapp} orientation="left" />
        <ProjectTile project={upspell} orientation="right" />
        <ProjectTile project={bodega} orientation="left" />
        <ProjectTile project={pokeapp} orientation="right" />
        <ProjectTile project={upspell} orientation="left" />
      </div>
    </>
  )
}
