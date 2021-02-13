import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form action="https://formspree.io/f/xqkgoabj" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" name="name" className="form-control" required />
            <input type="email" placeholder="email" name="email" className="form-control" required/>
            <textarea name="message" placeholder="message" rows="5" className="form-control" required></textarea>
          </div>
          <button type="submit" className="submit-btn btn">submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
