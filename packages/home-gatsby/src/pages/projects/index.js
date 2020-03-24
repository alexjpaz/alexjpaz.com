import React from "react"
import { Link, graphql } from "gatsby"

const Layout = React.Fragement;

export default ({ data }) => {
  return (
    <div>
      <h1 >
        Projects
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
              to={node.fields.slug}
            >
          <h3
        >
            {node.frontmatter.title}{" "}
          <span
        >
            — {node.frontmatter.date}
        </span>
      </h3>
      <p>{node.excerpt}</p>
    </Link>
    </div>
      ))}
  </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
