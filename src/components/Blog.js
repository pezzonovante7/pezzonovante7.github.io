import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


const query = graphql`
    {
      file(relativePath: {eq: "pen.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `



const Blog = ({id, slug, content, desc, date, title, category}) => {

  const {
    file: { childImageSharp: {fluid},
    },
  } = useStaticQuery(query)

  return <Link to={`/blogs/${slug}`} className="blog" key={id}>
    <article>
      <Image fluid={fluid} className="blog-img" /> 
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {}

export default Blog
