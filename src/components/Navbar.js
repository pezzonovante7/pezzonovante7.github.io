import React from "react"
import logo from "../assets/logo.svg"
import bsj from "../assets/final.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <a href="/" ><img src={bsj} alt="logo"/></a>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
