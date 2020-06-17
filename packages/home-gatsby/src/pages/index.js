import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import 'bulma/css/bulma.css'
import './home/home.css';

import { HeroElement } from '../components/Hero/HeroElement';
import { HeroSocialLinks } from '../components/Hero/HeroSocialLinks';
import { Footer } from '../components/Footer/';

//import {
  //faBell
//} from '@fortawesome/free-solid-svg-icons'

const Layout = React.Fragment;

const CategoryList = ({ category, data }) => (
  <div className="buttons are-medium">
    <a href={`/${category}`} className='button is-fullwidth is-link is-outlined'>{category}</a>
    { data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.category === category)
        .map(({ node }) => (
        <a key={node.id} href={ node.fields.slug } className='button is-fullwidth'>
            <span>{node.frontmatter.title}</span>
        </a>
      ))
    }
  </div>
);

const HeroAppLinks = (props) => {
  return (
    <div>
      <CategoryList category="projects" {...props} />
      <CategoryList category="blogs" {...props} />
    </div>
  );
};

const Home = (props) => (
  <Layout>
    <SEO title="@alexjpaz" keywords={[`gatsby`, `application`, `react`]} />
    <HeroElement />
    <div className='container is-narrow'>
      <HeroSocialLinks {...props} />
      <hr />
      <HeroAppLinks {...props} />
    </div>
    <Footer />
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
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

export default Home;
