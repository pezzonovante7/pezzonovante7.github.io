import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import projectdetails from "../constants/projectdetails"

const ProjectsPage = () => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={projectdetails} title="All Projects" /> 
    </section> 
  </Layout>
}

export default ProjectsPage
