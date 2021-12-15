import React from "react"
import "./styles.scss"
import GithubLogo from "../../../static/social/github.svg"
import ExternalLinkLogo from "../../../static/social/externalLink.svg"
import { navigate } from "gatsby"

const ProjectTile = ({
  project: { title, name, summary, description, tags, imgUrl, repoUrl, webUrl },
  orientation,
}) => {
  const openLink = link => {
    window.open(link, "_blank")
  }
  return (
    <div className={`project-tile project-tile-${orientation}`}>
      <div
        className="image-container"
        onClick={() => {
          navigate(`/${name}/`)
        }}
      >
        <span className="text">
          <h1>view more</h1>
        </span>
        <img
          className="image"
          src={`/projects/${imgUrl}`}
          alt={`${title} · ${summary}`}
        />
      </div>
      <div className="details-container">
        <h2 className="summary">{summary}</h2>
        <p className="description">{description}</p>
        <p className="tags">{tags}</p>
        <div className="links">
          <GithubLogo className="logo" onClick={() => openLink(repoUrl)} />
          <ExternalLinkLogo className="logo" onClick={() => openLink(webUrl)} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTile
