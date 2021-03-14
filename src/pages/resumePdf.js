import React from "react"
import Layout from "../components/Layout"
import resumeFile from "../assets/res.pdf"

const resumePdf = () => {
  return (
    <Layout>
      <embed
        src={resumeFile}
        type="application/pdf"
        width="100%"
        className="/resumePdf"
      />
    </Layout>
  )
}

export default resumePdf
