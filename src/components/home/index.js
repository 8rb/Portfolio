import React from "react"
import "./styles.scss"
import FloatingLinks from "../floatingLinks"
import { StaticImage } from "gatsby-plugin-image"
import PlanetsPage from "../../pages/planets"

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-col">
        <h1 className="name">Rodrigo Ramirez</h1>
        <h1 className="job">Frontend Developer</h1>
      </div>
      <div className="logo-container">
        <PlanetsPage />
      </div>
      <FloatingLinks />
    </div>
  )
}

export default Home
