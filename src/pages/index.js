import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {

  const siteUrl = `${data.site.siteMetadata?.siteUrl}`
  return (
    <Layout>
    <Seo title="Home" siteUrl={siteUrl} />
    

    </Layout>
 
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    sitePage {
      path
    }

    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`