import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import logo from "../assets/logos.png"

const Navbar = ({ toggleSidebar, style }) => {
  const [navBackground, setNavBackground] = useState("navTransparent")
  const navRef = React.useRef()

  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310
      if (show) {
        setNavBackground("navSolid")
      } else {
        setNavBackground("navTransparent")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`navbar ${style} ${style === "navbar-home" && navRef.current}`}
    >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <h2 className="logo">&#60;Coder/&#62;</h2> */}
            <h2 className="logo">Yadav Abhi</h2>
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
