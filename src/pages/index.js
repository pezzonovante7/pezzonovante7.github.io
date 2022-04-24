import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import projectdetails from "../constants/projectdetails"

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projectdetails} title="Featured Projects" showLink />
    </Layout>
  )
}
