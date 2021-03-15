import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import {
  FaGithubSquare,
  //  FaShareSquare
} from "react-icons/fa"

const Project = ({
  description: { description },
  name,
  github,
  stack,
  url,
  image,
  index,
}) => {
  return (
    <article className="project">
      {image && <Image fluid={image.fluid} className="project-img" />}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{name || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item, idx) => {
            return <span key={idx + 213}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a className="btn" href={url}>
            see live
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Project
