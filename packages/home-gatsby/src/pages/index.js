import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import 'bulma/css/bulma.css'
import './home/home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { HeroElement } from '../components/Hero/HeroElement';
import { Footer } from '../components/Footer/';

//import {
  //faBell
//} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faKeybase,
  faInstagram,

} from '@fortawesome/free-brands-svg-icons'

const Layout = React.Fragment;

const HeroSocialLinks = () => {
  const links = [
    { href: "https://github.com/alexjpaz", label: "github", icon: faGithub } ,
    { href: "https://instagram.com/alexanderthepaz", label: "instagram", icon: faInstagram },
    { href: "https://twitter.com/alexjpaz", label: "twitter", icon: faTwitter },
    { href: "https://www.linkedin.com/in/ajpaz/", label: "linkedin", icon: faLinkedin },
    { href: "https://keybase.io/alexjpaz", label: "keybase", icon: faKeybase },
  ];

  return (
    <div className="buttons are-medium">
      {
        links.map((link, i) => (
          <a key={i} target='_blank' rel="noopener noreferrer" className="button is-fullwidth" href={link.href}>
            {link.icon &&
              <span className='icon is-medium'><FontAwesomeIcon icon={link.icon} /></span>
            }
            <span>{link.label}</span>
          </a>
       ))
      }
    </div>
  );
};

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
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
