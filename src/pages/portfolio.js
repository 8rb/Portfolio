import React from "react"
import PageTransition from "../animations/pageTransition"
import ProjectHelmet from "../components/helmets/projectHelmet"
import ProjectNav from "../navigation/projectNav"
import ProjectRow from "../components/projectRow"
import LinksComponent from "../components/links"
import PaletteComponent from "../components/palette"
import { portfolio } from "../components/projectsInfo"
import "./projects.scss"

const PortfolioPage = () => {
  return (
    <>
      <PageTransition>
        <ProjectHelmet project={portfolio} />
        <ProjectNav />
        <section className="project-container">
          <h1 className="project-title">{portfolio.title}</h1>
          <h2 className="project-subtitle">{portfolio.summary}</h2>
          <ProjectRow project={portfolio} />
          <LinksComponent
            repoUrl={portfolio.repoUrl}
            webUrl={portfolio.webUrl}
          />
          <PaletteComponent palette={portfolio.palette} />
        </section>
      </PageTransition>
    </>
  )
}

export default PortfolioPage
