import React from "react"
import resumeFile from "../assets/res.pdf"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const resume = () => {
  return (
    <Layout>
      <SEO title="Resume" description="webdev resume" />
      <embed
        src={resumeFile}
        type="application/pdf"
        width="100%"
        className="resume"
      />
    </Layout>
  )
}

export default resume
