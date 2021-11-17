import React from "react"
import "./styles.scss"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"

const FloatingLinks = () => {
  const openLink = link => {
    window.open(link, "_blank")
  }

  return (
    <div className="floating-links" id="floating-links">
      <LinkedinLogo
        className="logo"
        onClick={() => openLink("https://www.linkedin.com/in/rodrigoramirezb/")}
      />
      <EmailLogo
        className="logo"
        onClick={() => {
          window.location.href = "mailto:rodrigo8rb@gmail.com"
        }}
      />
      <GithubLogo
        className="logo"
        onClick={() => openLink("https://github.com/TheRoro")}
      />
      <ResumeLogo className="logo" onClick={() => openLink("/resume.pdf")} />
    </div>
  )
}

export default FloatingLinks
