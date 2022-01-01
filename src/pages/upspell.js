import React from "react"
import PageTransition from "../animations/pageTransition"
import ProjectHelmet from "../components/helmets/projectHelmet"
import ProjectNav from "../navigation/projectNav"
import ProjectRow from "../components/projectRow"
import LinksComponent from "../components/links"
import PaletteComponent from "../components/palette"
import { upspell } from "../components/projectsInfo"
import "./projects.scss"

const UpSpellPage = () => {
  return (
    <>
      <PageTransition>
        <ProjectHelmet project={upspell} />
        <ProjectNav />
        <section className="project-container">
          <h1 className="project-title">{upspell.title}</h1>
          <h2 className="project-subtitle">{upspell.summary}</h2>
          <ProjectRow project={upspell} />
          <LinksComponent repoUrl={upspell.repoUrl} webUrl={upspell.webUrl} />
          <PaletteComponent palette={upspell.palette} />
        </section>
      </PageTransition>
    </>
  )
}

export default UpSpellPage
