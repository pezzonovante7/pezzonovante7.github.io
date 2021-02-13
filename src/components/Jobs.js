import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import jobdetails from "../constants/jobdetails"

const Jobs = () => {

  const {company, position, date, desc} = jobdetails[0]

  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobdetails.map((item)=>{
            return <button key="{item.id}" className="job-btn active-btn">
              {item.company} 
            </button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs
