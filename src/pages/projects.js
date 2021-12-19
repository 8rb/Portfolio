import React from "react"
import AllProjectsHelmet from "../components/helmets/allProjectsHelmet"
import ProjectsNav from "../navigation/projectsNav"
import ProjectsModule from "../modules/allProjects"

const ProjectsPage = () => {
  return (
    <>
      <AllProjectsHelmet />
      <ProjectsNav />
      <ProjectsModule />
    </>
  )
}

export default ProjectsPage
