/**
* Layout component that queries for data
* with Gatsby's StaticQuery component
*
* See: https://www.gatsbyjs.org/docs/static-query/
*/

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Footer from './Footer';
import 'bulma/css/bulma.css'

const HeaderFull = () => (
 <StaticQuery
   query={graphql`
     query SiteTitleQueryFull {
       site {
         siteMetadata {
           title
         }
       }
     }
   `}
   render={data => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            {data.site.siteMetadata.title}
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )}
  />
);

const LayoutFullBody = ({ children }) => (
  <main>
    <div className="hero-body">
      {children}
    </div>
  </main>
);

LayoutFullBody.propTypes = {
 children: PropTypes.node.isRequired,
}

const LayoutFull = ({ children }) => (
  <section className="hero is-fullheight">
    <HeaderFull />
      <LayoutFullBody>
        {children}
      </LayoutFullBody>
    <Footer />
  </section>
)

LayoutFull.propTypes = {
 children: PropTypes.node.isRequired,
}

export default LayoutFull
