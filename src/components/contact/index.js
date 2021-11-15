import React from "react"
import "./styles.scss"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"
import InstagramLogo from "../../../static/social/instagram.svg"
import CodepenLogo from "../../../static/social/codepen.svg"
import Footer from "../footer/index"

function Contact() {
  const [logoName, setLogoName] = React.useState("")

  const openLink = link => {
    window.open(link, "_blank")
  }

  return (
    <div className="contact" id="contact">
      <h1 className="title">contact_</h1>
      <div className="contact-grid">
        <GithubLogo
          className="logo"
          onClick={() => openLink("https://github.com/TheRoro")}
          onMouseEnter={() => setLogoName("Github")}
          onMouseLeave={() => setLogoName("")}
        />
        <LinkedinLogo
          className="logo"
          onClick={() =>
            openLink("https://www.linkedin.com/in/rodrigoramirezb/")
          }
          onMouseEnter={() => setLogoName("Linkedin")}
          onMouseLeave={() => setLogoName("")}
        />
        <EmailLogo
          className="logo"
          onClick={() => {
            window.location.href = "mailto:rodrigo8rb@gmail.com"
          }}
          onMouseEnter={() => setLogoName("Email me")}
          onMouseLeave={() => setLogoName("")}
        />
        <ResumeLogo
          className="logo"
          onClick={() => openLink("/resume.pdf")}
          onMouseEnter={() => setLogoName("Resume CV")}
          onMouseLeave={() => setLogoName("")}
        />
        <CodepenLogo
          className="logo"
          onClick={() => openLink("https://codepen.io/theroro")}
          onMouseEnter={() => setLogoName("Codepen")}
          onMouseLeave={() => setLogoName("")}
        />
        <InstagramLogo
          className="logo"
          onClick={() => openLink("https://www.instagram.com/rorocodes/")}
          onMouseEnter={() => setLogoName("Instagram")}
          onMouseLeave={() => setLogoName("")}
        />
      </div>
      <div className="name-container">
        <p>{logoName}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
