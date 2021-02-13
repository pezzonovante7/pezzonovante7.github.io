import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const query = graphql`
    {
      file(relativePath: {eq: "projects-8.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `  

const Project = ({id, github, description, title, stack, index}) => {
  const {
    file: { childImageSharp: {fluid},
    },
  } = useStaticQuery(query)

  return <article className="project">
    <Image fluid={fluid} className="project-img" />

    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github} target="_blank">
          <FaGithubSquare className="project-icon"/>
        </a>
      </div>
    </div>
  </article>
}

export default Project
