import React from "react"
import HomeHelmet from "../components/helmets/homeHelmet"
import HomeNav from "../navigation/homeNav"
import Home from "../modules/home"
import MainProjects from "../modules/mainProjects"
import About from "../modules/about"
import Contact from "../modules/contact"

const HomePage = () => {
  return (
    <>
      <HomeHelmet />
      <HomeNav />
      <Home />
      <MainProjects />
      <About />
      <Contact />
    </>
  )
}

export default HomePage
