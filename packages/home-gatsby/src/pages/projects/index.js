import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout-full"

export const ProjectListItem = ({ node }) => {
  return (
    <div className="content is-medium" key={node.id}>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <Link to={node.fields.slug}>
              <h3 className='title'>{node.frontmatter.title}</h3>
            </Link>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
          </div>
        </div>
      </div>
      <h6 className='subtitle'>
        <a href={node.frontmatter.project.url}>{node.frontmatter.project.url}</a>
      </h6>
      <p>
        {node.excerpt}
      </p>
    </div>
  );
};

export default ({ data }) => {
  return (
    <Layout>
      <div className="container has-text-centered">
        <h1 className="title is-1">Projects</h1>
        <section className='section has-text-justified'>
          <div class="columns is-centered">
            <div class="column is-half">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <ProjectListItem node={node} />
              ))}
              </div>
            </div>
          </section>
          <a href='/' className='button is-fullwidth is-large is-primary'>Home</a>
        </div>
      </Layout>
  );
};

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
            project {
              url
            }
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
