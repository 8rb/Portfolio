import React from "react"
import ProjectTile from "../../components/projectTile"
import { bodega, pokeapp, upspell } from "../../components/projectsInfo"
import "./styles.scss"

const ProjectsModule = () => {
  return (
    <div className="projects">
      <h1 className="section-title mb-5">All Projects</h1>
      <ProjectTile project={bodega} orientation="right" />
      <ProjectTile project={pokeapp} orientation="left" />
      <ProjectTile project={upspell} orientation="right" />
    </div>
  )
}

export default ProjectsModule
