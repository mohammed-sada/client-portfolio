import React from "react"
import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },

  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.twitter.com",
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
