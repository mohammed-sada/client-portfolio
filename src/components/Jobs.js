import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allContentfulJobs(sort: { fields: id, order: DESC }) {
      nodes {
        id
        company
        date
        position
        desc
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" color={"white-unrderline"} />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item, idx) => {
            return (
              <div key={idx} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/resume" className="btn center-btn light-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs