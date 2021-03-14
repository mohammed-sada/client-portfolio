import { Link } from "gatsby"
import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar, style }) => {
  return (
    <nav className={`navbar ${style}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h2 className="logo">&#60;Coder/&#62;</h2>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
