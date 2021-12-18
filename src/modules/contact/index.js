import React from "react"
import Footer from "../../components/footer/index"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"
import InstagramLogo from "../../../static/social/instagram.svg"
import CodepenLogo from "../../../static/social/codepen.svg"
import "./styles.scss"

const ContactModule = () => {
  const [logoName, setLogoName] = React.useState("")
  const [activeHover, setActiveHover] = React.useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ])

  const openLink = link => {
    window.open(link, "_blank")
  }

  const mouseEnterFunction = (name, index) => {
    setLogoName(name)
    let temp = [...activeHover]
    temp[index] = "active"
    setActiveHover(temp)
  }

  const mouseLeaveFunction = index => {
    setLogoName("")
    let temp = [...activeHover]
    temp[index] = "inactive"
    setActiveHover(temp)
  }

  return (
    <div className="contact" id="contact">
      <h1 className="section-title glowing-text">Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-grid">
          <GithubLogo
            className={`logo ${activeHover[0]}`}
            onClick={() => openLink("https://github.com/TheRoro")}
            onMouseEnter={() => mouseEnterFunction("GitHub", 0)}
            onMouseLeave={() => mouseLeaveFunction(0)}
          />
          <LinkedinLogo
            className={`logo ${activeHover[1]}`}
            onClick={() =>
              openLink("https://www.linkedin.com/in/rodrigoramirezb/")
            }
            onMouseEnter={() => mouseEnterFunction("LinkedIn", 1)}
            onMouseLeave={() => mouseLeaveFunction(1)}
          />
          <EmailLogo
            className={`logo ${activeHover[2]}`}
            onClick={() => {
              window.location.href = "mailto:rodrigo8rb@gmail.com"
            }}
            onMouseEnter={() => mouseEnterFunction("Email Me", 2)}
            onMouseLeave={() => mouseLeaveFunction(2)}
          />
          <ResumeLogo
            className={`logo ${activeHover[3]}`}
            onClick={() => openLink("/resume.pdf")}
            onMouseEnter={() => mouseEnterFunction("Resume CV", 3)}
            onMouseLeave={() => mouseLeaveFunction(3)}
          />
          <CodepenLogo
            className={`logo ${activeHover[4]}`}
            onClick={() => openLink("https://codepen.io/theroro")}
            onMouseEnter={() => mouseEnterFunction("CodePen", 4)}
            onMouseLeave={() => mouseLeaveFunction(4)}
          />
          <InstagramLogo
            className={`logo ${activeHover[5]}`}
            onClick={() => openLink("https://www.instagram.com/rorocodes/")}
            onMouseEnter={() => mouseEnterFunction("Instagram", 5)}
            onMouseLeave={() => mouseLeaveFunction(5)}
          />
        </div>
        <div className="name-container">
          <p className="name-text">{logoName}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactModule
