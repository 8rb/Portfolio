import React from "react"
import "./styles.scss"
import ProjectTile from "../projectTile"
import { bodega, pokeapp } from "../projects"
import { navigate } from "gatsby"

function MainProjects() {
  return (
    <div className="main-projects" id="main-projects">
      <h1 className="title">projects</h1>
      <div className="projects-list">
        <ProjectTile project={bodega} orientation="right" />
        <ProjectTile project={pokeapp} orientation="left" />
      </div>
      <button
        className="button"
        onClick={() => {
          navigate("projects")
        }}
      >
        More Projects
      </button>
    </div>
  )
}

export default MainProjects
