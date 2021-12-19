import React from "react"
import { Helmet } from "react-helmet"

const ProjectHelmet = ({ project: { title, summary, keywords, imgUrl } }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title} · {summary}
      </title>
      <meta name="theme-color" content="#16ffd8" />
      <link rel="canonical" href="https://rodrigoramirez.dev" />
      <meta property="og:title" content={`${title} · ${summary}`} />
      <meta property="og:url" content="https://rodrigoramirez.dev" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={`${summary} · ${keywords}`} />
      <meta name="description" content={`${summary} · ${keywords}`} />
      <meta name="image" content={imgUrl} />
    </Helmet>
  )
}

export default ProjectHelmet
