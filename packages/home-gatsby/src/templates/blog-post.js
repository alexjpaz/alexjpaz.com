import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-full"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="container has-text-centered">
        <h1 className="title">
          {post.frontmatter.title}
        </h1>

        <h2 className="subtitle">
          <a href={post.frontmatter.project.url}>{post.frontmatter.project.url}</a>
        </h2>
        <section className='section has-text-justified'>
          <div class="columns is-centered">
            <div class="column is-half">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        project {
          url
        }
      }
    }
  }
`
