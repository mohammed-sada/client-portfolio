import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Jobs from "../components/Jobs"
import SEO from "../components/SEO"
export default ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
    allContentfulBlog: { nodes: blogs },
  } = data

  return (
    <Layout style="navbar-home">
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(filter: { feature: { eq: true } }) {
      nodes {
        name
        description {
          description
        }
        github
        url
        stack
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        id
      }
    }

    allContentfulBlog(limit: 3) {
      nodes {
        title
        description {
          description
        }
        id
        date(formatString: "MMM Do, YYYY")
        category
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
