import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      {isOpen && <Links styleClass="sidebar-links" />}
      {isOpen && <SocialLinks styleClass="sidebar-icons" />}
    </div>
  </aside>
}

export default Sidebar
