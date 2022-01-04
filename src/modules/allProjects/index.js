import React from "react"
import ProjectTile from "../../components/projectTile"
import {
  bodega,
  pokeapp,
  upspell,
  portfolio,
} from "../../components/projectsInfo"
import "./styles.scss"

const ProjectsModule = () => {
  return (
    <section className="projects">
      <h1 className="section-title mb-5">All Projects</h1>
      <ProjectTile project={bodega} orientation="right" />
      <ProjectTile project={pokeapp} orientation="left" />
      <ProjectTile project={upspell} orientation="right" />
      <ProjectTile project={portfolio} orientation="left" />
    </section>
  )
}

export default ProjectsModule
