import React from "react"
import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://medium.com/@abhishake.yadav",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/abhishake-yadav-074408209/",
  },

  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/pydev2018",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
