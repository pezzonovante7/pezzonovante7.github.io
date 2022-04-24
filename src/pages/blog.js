import React from "react"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import blogdetails from "../constants/blogdetails"

const Blog = () => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogdetails} title="blog" />
      </section>
    </Layout>
  )
}

export default Blog
