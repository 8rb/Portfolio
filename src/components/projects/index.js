import React from "react"
import "./styles.scss"
import Card from "../card/index"

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="title">projects_</h1>
      <div className="projects-grid">
        <Card name="PokeApp" route="pokeapp" />
        <Card name="Bodega" route="bodega" />
        <Card name="UpSpell" route="upspell" />
        <Card name="bodega" route="bodega" />
        <Card name="bodega" route="bodega" />
        <Card name="bodega" route="bodega" />
      </div>
    </div>
  )
}

export default Projects
