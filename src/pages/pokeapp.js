import React from "react"
import PageTransition from "../animations/pageTransition"
import ProjectHelmet from "../components/helmets/projectHelmet"
import ProjectNav from "../navigation/projectNav"
import ProjectRow from "../components/projectRow"
import LinksComponent from "../components/links"
import PaletteComponent from "../components/palette"
import { pokeapp } from "../components/projectsInfo"
import "./projects.scss"

const PokeAppPage = () => {
  return (
    <>
      <PageTransition>
        <ProjectHelmet project={pokeapp} />
        <ProjectNav />
        <section className="project-container">
          <h1 className="project-title">{pokeapp.title}</h1>
          <h2 className="project-subtitle">{pokeapp.summary}</h2>
          <ProjectRow project={pokeapp} />
          <LinksComponent repoUrl={pokeapp.repoUrl} webUrl={pokeapp.webUrl} />
          <PaletteComponent palette={pokeapp.palette} />
        </section>
      </PageTransition>
    </>
  )
}

export default PokeAppPage
