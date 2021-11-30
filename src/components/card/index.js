import React from "react"
import "./styles.scss"
import { navigate } from "gatsby"

const Card = ({ name, route }) => {
  return (
    <div
      className="card"
      onClick={() => navigate(`${route}`)}
      onKeyDown={() => navigate(`${route}`)}
      role="button"
      tabIndex="0"
    >
      <h1>{name}</h1>
    </div>
  )
}

export default Card
