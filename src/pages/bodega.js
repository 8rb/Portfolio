import React from "react"
import PageTransition from "../animations/pageTransition"
import ProjectHelmet from "../components/helmets/projectHelmet"
import ProjectNav from "../navigation/projectNav"
import ProjectRow from "../components/projectRow"
import LinksComponent from "../components/links"
import PaletteComponent from "../components/palette"
import { bodega } from "../components/projectsInfo"
import "./projects.scss"

const BodegaPage = () => {
  return (
    <>
      <PageTransition>
        <ProjectHelmet project={bodega} />
        <ProjectNav />
        <section className="project-container">
          <h1 className="project-title">{bodega.title}</h1>
          <h2 className="project-subtitle">{bodega.summary}</h2>
          <ProjectRow project={bodega} />
          <LinksComponent repoUrl={bodega.repoUrl} webUrl={bodega.webUrl} />
          <PaletteComponent palette={bodega.palette} />
        </section>
      </PageTransition>
    </>
  )
}

export default BodegaPage
