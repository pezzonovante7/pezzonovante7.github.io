import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import stack from "../constants/techstack"

const query = graphql`
  {
    file(relativePath: { eq: "vector-teal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  let title = "about me"
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>
              {" "}
              I graduated from National Institute of Technology, Andhra Pradesh;
              majoring in computer science and engineering. I have a 5 year
              experience of programming in C++ and a 4 year experience of
              programming in JAVA. An amateur programmer in python and
              javascript. Heavily intrigued by some subjects in Computer Science
              which include Data Base Management Systems, Data Structures and
              Algorithms, Object Oriented Programming. I currently work as a
              software engineer at Accenture.{" "}
            </p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.key}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
