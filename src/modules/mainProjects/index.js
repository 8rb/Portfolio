import React from "react"
import { navigate } from "gatsby"
import ProjectTile from "../../components/projectTile"
import { bodega, pokeapp } from "../../components/projectsInfo"
import "./styles.scss"

const MainProjectsModule = () => {
  return (
    <div className="main-projects" id="main-projects">
      <h1 className="section-title glowing-text">Selected Projects</h1>
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

export default MainProjectsModule
